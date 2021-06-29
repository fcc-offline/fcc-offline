# fcc-offline - Learn to code without internet

This repository contains the backend generator for `fcc-offline`. To generate static files to learn and practice [`freeCodeCamp lessons`](https://www.freecodecamp.org/learn) at home, without internet. You can find the sample generated files at [fcc-offline/demo](https://github.com/fcc-offline/fcc-offline/tree/demo) repository

_Note: This project is discontinued due to the lack of usage. There might be many missing features, i.e the challenge validator [inlineTests.js](/content/public/scripts/inlineTests.js). I published this project as required by [Anto](https://twitter/elkwaet)_

---

Table of contents:

1. [Install project](#1-install-project)
2. [How to use it](#2-how-to-use-it)
    - For development
    - Build for distribution
3. [Project layout](#3-project-layout)
4. [About the generator](/#4-about-the-generator)
    - How does it work
    - How does it convert .md to .html
    - How to create a new course
    - How to create a new challenge

## 1. Install project

Before install `fcc-offline` generator, make sure you have [nodejs](https://nodejs.org/en/), and package manager (either [npm](https://nodejs.org/en/) or [yarn](https://yarnpkg.com/)) installed

Then:

1. Download the repository to your local machine, by click the green button `Code`, and choose `Download ZIP`
2. After unzip `fcc-offline`, install dependencies by enter the following command on your Terminal (MacOS) or Command-Line (Windows)_:

```sh
# with npm
$ npm install

# or with yarn
$ yarn
```

3. Now, the project should be ready

## 2. How to use it

_The following commands are meant to use in Terminal (MacOS) or Command-Line (Windows)_

1. For development, run one the following commands. When you make changes to the challenges, it will automatically regenerate files:

```sh
# with npm
$ npm run dev

# or with yarn
$ yarn dev
```

After run the `dev` command, there are 3 other commands you can use (just type on your key):
- 'exit' to exit process
- 'rebuild' to re-generate content files
- 'clear' to clear console

2. To build project for distribution, run one the following commands:

```sh
# with npm
$ npm run build

# or with yarn
$ yarn build
```

## 3. Project layout

Ideally, you only need to look for files in the `/content` directory, especially `/content/docs`. Here are directories within the `/content` and what they're for:

- Output layout `/content/public`: contains static files such as scripts, styles, images
- Docs `/content/docs`: contains lessons and challenges in markdown format
- Template `/content/template`: contains HTML templates, will be used to generate pages (i.e home page, challange page)

## 4. About the genereator

**How does it work?**

When you run `yarn build` or `npm run build`, the generating functions will list all markdown `.md` files and generate HTML files in the same directory structure. Besides, you can specify the template in the markdown file to let the generator knows which template to render

**How does it convert `.md` to `.html`?**

Have a look at a tempalte file (i.e [content.html](/content/templates/content.html)), you will see a bunch `{{xxx}}`. Those are variable placeholders. When generating, it will
1. Read the markdown, and parse its content into variables (i.e `title`, `content`, etc.)
2. Load the template and replace with those variables into its variable placeholder
3. Then output the content to a `.html` file

You also see variables that are not in the markdown files. For example `next_url`, `prev_url`. Those variables are defined when the generator is running

By default, the generator will use `/templates/content.html` 

**How to create a new course?**

Similar to freeCodeCamp, a course contains practice and challenges. To create a course, you need to:

1. Create a new directory under `/content/docs/your-new-course` (use lowercase, seperated with hyphens format)
2. (optional) Create a `index.md` file inside the new directory. This file is the cover for the course (see example [basic-css/index.md](/content/docs/basic-css/index.md))

**How to create a new challange?**

To create a new challenge, under the course's directory:

1. Create the challange file in markdown, with the name using format `xx-challenge-name`, where:
- `xx` is a number, will be used as the order in the challanges list
- `challenge-name` is its name using lower case with hyphen-separated, will be used as the challenge url

2. Each markdown file contains a configuration header and its content:

- **The configuration header** specifies variables (i.e `title`, `template`). Those configuration must be writtin inside a comment block `<!-- config=true -->`. 
- **The markdown content** contains an introduction
- **The challenges** contains description, and requirements to pass. On each requirements, you must specify inlineTest, it will be used to validate challanges. To learn more about writing validator, see [readme.inlineTest.md](/content/pubic/scripts/readme.inlineTest.md)

Here is an example:

```
<--
title=Here is the title
template=home
-->

In the introduction, briefly describe what this challange about, and how to use it with example.

Use html block for example:

'''html
<h1>Use h1 tag for heading 1</h1>
'''

---
### Challenge

Describe the requirements to pass this challange

- [ ] The style attribute should be removed from your h2 element  <!--!hasAttr("h2", "style")-->
- [ ] You should create a style element  <!--has("style")-->
...

```