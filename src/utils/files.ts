import fs from "fs";

export type MDfsItem = { 
    title: string, 
    markdown: string, 
    path: string, 
    name: string,
    configs: any 
};

export async function getMDfs(paths: { name: string, path: string }[]) {
    let result: MDfsItem[] = new Array(paths.length);
    await paths.forEach(async p => {

        let content = await fs.readFileSync(p.path, { encoding: 'utf-8' });

        let extracted = extractConfigs(content);
        result.push({
            markdown: extracted.content,
            ...p,
            title:extracted.configs.title,
            configs: extracted.configs
        })
    })
    return result;
}

export function extractConfigs(text: string): { content: string, configs: any } {

    let startWithComment = text.indexOf("<!--") === 0;
    let opts: { [props: string]: string } = {};
    let content = text;

    if (startWithComment) {
        let match = text.match(/\n([a-z0-9_]+)=/gsi) || [];
        let lastIndex = -1, nextIndex: number | undefined = -1;
        match.forEach((item, i) => {
            lastIndex = text.indexOf(item);
            if (match[i + 1]) {
                nextIndex = text.indexOf(match[i + 1])
            } else {
                nextIndex = text.indexOf(`-->`)
            }
            let name = item.match(/([a-z0-9_]+)/i);
            if (name && name.length) {
                opts[name[0] as string] = text.substring(lastIndex + item.length, nextIndex);
            }
        })
    }

    return {
        content,
        configs: opts
    }
}