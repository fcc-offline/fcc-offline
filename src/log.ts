import chalk from "chalk";

const log = {
    out: (color: "grey" | "green" | "red" | "blue" | "gray", text: string, ...args: string[]) => {
        console.log(chalk[color](text));
    },
    blue: (text: string) => {
        console.log(chalk.blue(text));
    },
    red: (text: string) => {
        console.log(chalk.red(text))
    },
    gray: (text: string)=> {
        console.log(chalk.gray(text));
    },
    green: (text: string)=> {
        console.log(chalk.green(text));
    },
}


export default log;