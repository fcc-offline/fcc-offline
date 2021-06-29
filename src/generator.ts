import { listFile, getInfo } from "./utils/utils";
import path from "path";
import fs from "fs";
import { render } from "./utils/render";
import ncp from "ncp";
import rimraf from "rimraf";
import log from "./log";
import generateFile from "./utils/generateFile";
import { startListen } from "./utils/listener";
import { generateContentFiles } from "./utils/build";

let outDir = "";

export async function generate(opts: {
    outDir: string,
    rootDir: string,
    docsDir?: string,
    templateDir: string,
    publicDir?: string
}) {

    const {
        rootDir,
        templateDir,
        publicDir
    } = opts;
    let _docsDir = opts.docsDir || rootDir + '/docs';
    outDir = opts.outDir;
    
    log.blue(`DOCS started at ${rootDir}`);

    if (process.argv.indexOf("--rebuild") !== -1) {
        generateContentFiles();
    }

    if (process.argv.indexOf("--watch") !== -1) {
        startListen(_docsDir);
    };
}
