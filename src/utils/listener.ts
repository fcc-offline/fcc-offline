import fs from "fs";
import generateFile from "./generateFile";
import log from "../log";
import { generateContentFiles, generateMDfs } from "./build";
import { listFile } from "./utils";
import { getMDfs } from "./files";

const outDir = process.env.FCC_OUT_DIR as string;
const publicDir = process.env.FCC_PUBLIC_DIR as string;

export function startListen(listenDir: string) {
    let watches: fs.FSWatcher[] = [];
    watches.push(listenToDocs(listenDir));
    watches.push(listenToPublic(publicDir));
    watches.push(listenToTemplate(process.env.FCC_TEMPLATE_DIR as string))
    listenToUserCommand(watches);

}

function listenToDocs(dir: string) {

    log.green(`Listening to DOCS changes at ${dir}...`);
    return fs.watch(dir, { recursive: true }, async function (event: string, name: string) {
        if (event === "change" && name.indexOf(".md") !== -1 && name.indexOf("index") === -1) {

            log.green(`Changes at ${name}...`)
            let paths = name.split(`/`);
            paths.pop();
            
            const outDirPath = paths.join("/");

            let inPath = `${dir}/${outDirPath}`;

            log.gray(`-- listing ${inPath}...`);

            let mdfs = (await listFile(inPath, { ext: "md"}))
                .map(p => {
                    return {
                        name: p,
                        path: `${inPath}/${p}`
                    }
                });

            const mdfsContents = await getMDfs(mdfs);

            generateMDfs({
                mdfsContents,
                level: name.split("/").length - 1,
                srcDir: dir,
                outPath: `${outDir}/${outDirPath}`
            })
            // generateFile({
            //     srcFile: name,
            //     destFile: `${outDir}/${name.replace(".md", ".html")}`,
            //     level: name.split("/").length - 1,
            //     srcDir: dir
            // })
        }
    });
}


function listenToTemplate(dir: string) {

    log.green(`Listening to DOCS changes at ${dir}...`);
    return fs.watch(dir, { recursive: true }, function (event: string, name: string) {
        if (event === "change") {
            generateContentFiles();
        }
    });
}

function listenToPublic(dir: string) {
    log.green(`Listening to PUBLIC changes at ${dir}...`);
    return fs.watch(dir, { recursive: true }, function (event: string, name: string) {
        if (event === "change") {
            let srcFile = `${dir}/${name}`;
            let desFile = `${outDir}/${name}`;
            fs.copyFile(srcFile, desFile, (err) => {
                log.gray(`-- [PUBLIC] ${srcFile} -> ${desFile}`)
            })
        }
    });
}

function listenToUserCommand(watches: fs.FSWatcher[]) {
    var stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');

    let command: string = "";
    // on any data into stdin
    stdin.on('data', function (key: string) {
        if (key.charCodeAt(0) === 127) {
            command = command.substring(0, command.length - 1);
        } else if (key === `\r` || key === '\u0003') {
            if (command === 'exit' || key === '\u0003') {
                watches.forEach(it => it.close());
                process.exit();
            } else {
                switch (command) {
                    case "rebuild":
                        generateContentFiles()
                        break;
                }
            }
            command = '';
            console.clear();
            log.gray(`Console has been cleared`);
            return;
        } else {
            command += key;
        }
        console.clear();
        console.log(`Enter command: ${command}
        - 'exit' to exit process
        - 'rebuild' to re-generate content files
        - 'clear' to clear console
        `);
    });
}