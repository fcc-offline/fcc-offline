import log from "../log";
import fs from "fs";
import { render } from "./render";
import { minify } from "html-minifier";

export default async function generateFile(opts: {
    srcFile: string,
    destFile: string,
    level: number,
    markdown?: string,
    srcDir: string,
    vars?: any
}) {
    const { srcFile, destFile, level, srcDir, vars } = opts;

    log.gray(`--- Generate ${srcFile} -> ${destFile}`);
    let html = await render({
        level: level,
        markdown: opts.markdown,
        content: `${srcDir}/${srcFile}`,
        parent: srcDir,
        vars
    });
    // html = minify(html, {
    //     collapseWhitespace: true,

    // });
    await writeFile(destFile, html);
}



export async function renderTemplate(opts: {
    templateSrc?: string,
    content: string,
    level: number,
    parent: string,
    outDir: string
}) {
    const { templateSrc,
        content,
        level, outDir,
        parent } = opts;

    let fileOutPath = `${outDir}/index.html`;
    log.gray(`--- Generate index -> ${fileOutPath}`);

    let html = await render({
        templateSrc: templateSrc,
        markdown: content as string,
        level,
        parent,
        vars: {
            title: "Table of contents"
        }
    });

    await writeFile(fileOutPath, html);
}

function writeFile(path: string, content: string) {
    if (process.env.FCC_DISABLE_ORDERED_NAME !== "true") {
        path = path.replace(/\d+\-/, '');
    }
    return fs.writeFileSync(path, content, { encoding: 'utf-8' });
}
