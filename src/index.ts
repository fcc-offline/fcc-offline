require('dotenv').config();

import { generate } from "./generator";
import path from "path";

function p(_path: string) {
    return path.join(__dirname, "../content", _path);
}

generate({
    outDir: process.env.FCC_OUT_DIR || p("dist"),
    rootDir: process.env.FCC_ROOT_DIR || p(""),
    templateDir: process.env.FCC_TEMPLATE_DIR || p("templates"),
    publicDir: process.env.FCC_PUBLIC_DIR || p("public")
})