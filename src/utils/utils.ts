import fs from "fs";

export function listFile(path: string, options?: { ext?: string }): Promise<string[]> {
    return new Promise((resolve, reject) => {
        fs.readdir(path, function (err, files) {
            //handling error
            if (err) {
                reject(err);
                return;
            }
            let opts = Object.assign({}, options);
            opts.ext && (files = files.filter(item => item.indexOf(`.${opts.ext}`) !== -1))
            resolve(files);
        })
    })
}

export function getInfo(path: string): Promise<[{ path: string, title: string }]> {
    return new Promise((resolve, reject) => {
        fs.readFile(path, { encoding: "utf8" }, function (err, data) {
            //handling error
            if (err) {
                reject(err);
                return;
            }
            resolve(JSON.parse(data) as any);
        })
    })
}