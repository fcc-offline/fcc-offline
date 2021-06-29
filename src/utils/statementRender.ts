const regex = /{{if(.*?)}}.*?{{endif}}/s;

export function renderStatement(content: string, opts: { [prop: string]: any }) {
    let match;
    while (match = content.match(regex)) {
        content = renderCondition(content, match[0], opts)
    }

    return content;
}

function renderCondition(content: string, cdt: string, options: { [prop: string]: any }) {
    let match = cdt.match(/{{(if|elsif|else|endif)(.*?)}}/g);
    let txt = "";
    let globals = options;

    if (match) {
        match.some((stm, i) => {
            let iss = isStatement(stm);
            let astm: RegExpMatchArray | null, parts: RegExpMatchArray | null;
            if (iss) {
                switch (iss) {
                    case "if":
                    case "elsif":
                        astm = stm.match(new RegExp("{{"+iss+"(.*?)}}", "m"));
                        if (!astm || !eval(astm[1])) {
                            break;
                        }
                    case "else":
                        // @ts-ignore
                        parts = cdt.match(new RegExp(stm + "[\n]{0,1}(.*?)[\n]{0,1}" + match[i + 1], "s"));
                        parts && (txt = parts[1]);
                        return true;
                }
            }
            return false;
        })
        content = content.replace(regex, txt);
    }

    return content;
}

function isStatement(str: string) {
    let match = str.match(/(if|else|elsif|endif)/);
    return match && match.length ? match[0] : undefined;
}