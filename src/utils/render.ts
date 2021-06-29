import fs from "fs";
import log from "../log";
import converter from "../converter";
import { renderStatement } from "./statementRender";

const templatePath = process.env.FCC_TEMPLATE_DIR;
const docsDir = process.env.FCC_FCC_DIR || "";
const varRegex = /{{([a-z_]+)}}/g;
export async function render(opts: {
    template?: string,
    templateSrc?: string,
    content?: string,
    markdown?: string,
    level: number,
    parent: string,
    vars?: any
}) {

    let md = opts.markdown || (opts.content ? await fs.readFileSync(opts.content, { encoding: 'utf8' }) : "");
    let output = `{{content}}`;
    let parent = opts.parent.replace(docsDir, "");
    const { templateSrc } = opts;

    let configs = Object.assign({
        sub_dir_link: parent ? './index.html' : undefined,
        sub_dir_name: parent,
        root_dir_link: ""
    }, opts.vars);

    let { template } = configs;

    if (!template) {
        template = process.env.FCC_DEFAULT_TEMPLATE as string;
    }
    if (templateSrc || (templatePath && template)) {
        try {
            // console.log("log", templateSrc || `${templatePath}/${template}.html`)
            output = await fs.readFileSync(templateSrc || `${templatePath}/${template}.html`, { encoding: 'utf8' });
        } catch (err) {
            log.red(err.toString());
        }
    }

    // Functions
    output = featurePublic(output, opts);
    md = featurePublic(md, opts);

    Object.keys(configs).forEach(ck => {
        configs[ck] = featurePublic(configs[ck], opts)
    })

    // Statements if/elsif/else/endif
    output = renderStatement(output, configs);
    // md = renderStatement(md, configs);

    // Variables
    output = replaceContent(output, configs);
    md = replaceContent(md, configs);

    let contentHTML = converter.makeHtml(md);
    return output.replace(/{{content}}/, contentHTML) as string;
}

function featurePublic(content: string, opts: { level: number }) {
    if (!content || typeof content !== "string") return content;

    let paths = new Array(opts.level).fill("..");
    paths.push('$1');
    return content.replace(/{{public\((.+)\)}}/g, paths.join("/"));
}

function replaceContent(content: string, opts: { [prop: string]: string | number | boolean }) {
    let vars = content.match(varRegex);
    if (vars) {
        let tag: string;
        vars.forEach(item => {
            tag = item.replace(/{{(.+)}}/, '$1');
            if (tag !== "content") {
                content = content.replace(
                    new RegExp(`{{${tag}}}`, 'g'),
                    (opts[tag] || "") as string
                );
            }
        })
    }
    return content;
}
