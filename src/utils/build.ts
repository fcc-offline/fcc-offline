import log from "../log";
import ncp from "ncp";
import rimraf from "rimraf";
import { listFile } from "./utils";
import generateFile, { renderTemplate } from "./generateFile";
import fs from "fs";
import path from "path";
import { render } from "./render";
import { getMDfs, MDfsItem } from "./files";

const outDir = process.env.FCC_OUT_DIR as string;
const publicDir = process.env.FCC_PUBLIC_DIR as string;
const docsDir = process.env.FCC_FCC_DIR as string;
const templateDir = process.env.FCC_TEMPLATE_DIR;


const orderedRegex = /(\d+)-(.*).md/;

export async function generateContentFiles() {
    await rimraf.sync(outDir);

    if (publicDir) {
        await syncToPublic(publicDir, outDir);
    }

    log.blue(`[+] Clean up directory${publicDir ? ` and sync files from ${publicDir}` : ''}`);

    await getAndRenderFiles({
        srcDir: docsDir,
        outPath: outDir,
        templateDir,
        level: 0
    });
}


async function getAndRenderFiles(opts: {
    srcDir: string,
    outPath: string,
    templateDir?: string,
    level: number
}) {
    const { srcDir, outPath, templateDir, level } = opts;
    log.blue(`[+] Fetching ${srcDir}`);
    let info = await listFile(srcDir);

    // md files
    const dirs = info.filter(item => item.indexOf(".md") === -1);
    const mdfs = info.filter(item => item.indexOf(".md") !== -1)
        .map(p => {
            return {
                name: p,
                path: `${srcDir}/${p}`
            }
        });

    const mdfsContents = await getMDfs(mdfs);
    const children_list = mdfsContents.filter(item => item && item.name !== "index.md")
        .map(item => item.name.replace(/(\d+)-(.*).md/, `$1. [${item.title}]($2.html)`))
        .join(`\n`);

    await generateMDfs({
        mdfsContents, outPath, level, srcDir
    });

    if (process.env.FCC_AUTO_HOME === "true" && info.indexOf("index.md") === -1) {

        await renderTemplate({
            content: children_list,
            templateSrc: path.join(__dirname, "../templates/index.html"),
            parent: srcDir,
            level,
            outDir: outPath
        })
    }

    await dirs.forEach(async item => {
        let outDir = `${outPath}/${item}`;
        await fs.mkdirSync(outDir);
        await getAndRenderFiles({
            srcDir: `${srcDir}/${item}`,
            outPath: outDir,
            level: level + 1
        })
    })
}

export async function generateMDfs(opts: {
    mdfsContents: MDfsItem[],
    outPath: string,
    level: number,
    srcDir: string
}) {
    const { mdfsContents, outPath, level, srcDir } = opts;
    const index = mdfsContents.find(item => item && item.name === "index.md");

    const children_list = mdfsContents.filter(item => item && item.name !== "index.md")
        .map(item => item.name.replace(/(\d+)-(.*).md/, `$1. [${item.title}]($2.html)`))
        .join(`\n`);

    const isRoot = srcDir == docsDir;

    await mdfsContents.forEach(async (item, i) => {
        let fileOutPath = `${outPath}/${item.name.replace('md', 'html')}`;
        let order = orderedRegex.test(item.name) ?
            parseInt(item.name.replace(orderedRegex, `$1`)) : undefined;

        let next: MDfsItem | undefined = mdfsContents[i + 1];
        let prev = i > 0 ? mdfsContents[i - 1] : undefined;

        if (next && next.name === "index.md") {
            next = undefined;
        }

        let sub_dir_link = index ? getURL(index.name, { ordered: false }) : undefined;
        let sub_dir_name = index ? index.title : undefined;
        let isIndex = item.name === "index.md";

        await generateFile({
            srcFile: item.path,
            markdown: item.markdown,
            destFile: fileOutPath,
            level,
            srcDir,
            vars: {
                sub_dir_name: isIndex ? isRoot ? undefined : "Back" : sub_dir_name,
                sub_dir_link: isIndex ? isRoot ? undefined : "../index.html" : sub_dir_link,
                children_list,
                order,

                next_order: (next && order) ? order + 1 : undefined,
                next_name: next ? next.title : undefined,
                next_url: next ? getURL(next.name) : undefined,

                prev_order: (prev && order) ? order - 1 : undefined,
                prev_name: prev ? prev.title : undefined,
                prev_url: prev ? getURL(prev.name) : undefined,
                ...item.configs
            }
        })
    });
}

function syncToPublic(source: string, dest: string): Promise<void> {
    return new Promise((resolve) => {
        ncp(source, dest, function (err) {
            if (err) {
                log.red(`--- sync failed: ${err.toString()}`);
                return;
            }
            log.gray("--- sync completed");
            resolve();
        })
    })
}

function getURL(input?: string, options?: { ordered: boolean }) {

    if (!input) return input;

    let { ordered } = Object.assign({ ordered: true }, options);
    if (ordered && orderedRegex.test(input)) {
        return input.replace(/(\d+)-(.*).md/, "$2.html");
    }

    return input.replace(/(.*).md/, "$1.html");
}