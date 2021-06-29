
function InlineTest({
    testSelector,
    target,
    docHTML
}) {

    let testTarget = document.querySelector(testSelector); // should be a ul
    if (!testTarget) {
        console.log(`Not test found`);
        return;
    }

    if (!target) {
        console.log(`Target test found`);
        return;
    }

    const _doc = target.nodeName === "#document" ? target : target.ownerDocument;
    const _docHTML = docHTML !== undefined ? docHTML : _doc.documentElement.outerHTML;

    // Variants
    // - innerText(selector)
    // - innerText(selector, toLowerCase: boolean)
    // - innerText(selector, index: number)
    // - innerText(selector, indexStart: number, indexEnd: number)
    // - innerText(selector, index: number, index: number, ended: true)
    function innerText(selector, toLowerCase, indexStart) {

        if (indexStart) {
            el = target.querySelectorAll(selector)[indexStart];
        } else {
            el = target.querySelector(selector);
        }

        return el ? toLowerCase ? el.innerText.toLowerCase() : el.innerText : undefined;
    }

    function cleanup(input) {
        return input
            .replace(/&gt;/g, `>`)
            .replace(/&lt;/g, `<`);
    }

    function has(selector) {
        return !!target.querySelector(selector)
    }

    function innerTextContains(selector, input) {
        let value = innerText(selector);

        if (value) {
            return value.toLowerCase().indexOf(input.toLowerCase()) !== -1;
        }
        return false;
    }

    function hasHTML(html) {
        return target.innerHTML.indexOf(html) !== -1;
    }

    function hasText(text, selector, indexStart) {
        let checkText = cleanup(text);
        let el = (selector ? indexStart !== undefined ? target.querySelectorAll(selector)[indexStart] : target.querySelector(selector) : target);
        return el ? el.innerText.indexOf(checkText) !== -1 : undefined;
    }

    function hasHTMLRegex(pattern) {
        return new RegExp(pattern).test(target.innerHTML)
    }

    function countText(input) {
        let checkText = cleanup(input).toLowerCase();
        let matches = target.innerText.toLowerCase().match(new RegExp(checkText, 'g'));
        console.log("countText", matches, checkText);
        return matches ? matches.length : 0;
    }

    function count(selector) {
        let checkText = cleanup(selector).toLowerCase();
        return target.querySelectorAll(checkText).length;
    }

    function countHTML(input) {
        let checkText = cleanup(input).toLowerCase();
        let matches = target.innerHTML.toLowerCase().match(new RegExp(checkText, 'g'));
        console.log("countHTML", matches, checkText);
        return matches ? matches.length : 0;
    }

    function countRegex(input) {
        let checkText = cleanup(input).toLowerCase();
        let matches = target.innerHTML.toLowerCase().match(new RegExp(checkText, 'g'));
        console.log("countRegex", matches, checkText);
        return matches ? matches.length : 0;
    }

    function elementOrders() {
        let ordered = true;
        Array.from(arguments).some((text, i) => {
            if (!target.children[i] || target.children[i].tagName.toLowerCase() !== text.toLowerCase()) {
                ordered = false;
            }
            return !ordered;
        });
        return ordered;
    }

    function elementOrdersHTML() {
        let ordered = true;
        let lastIndex = -1, currentIndex = -1;
        let innerHTML = target.innerHTML.toLowerCase();
        Array.from(arguments).some((text, i) => {
            currentIndex = innerHTML.indexOf(`<${text}>`);
            if (currentIndex === -1 || currentIndex < lastIndex) {
                ordered = false;
            } else {
                lastIndex = currentIndex;
            }
            return !ordered;
        });
        return ordered;
    }

    function hasAttr(selector, attrName, attrValue) {
        let el = target.querySelector(selector);

        if (!el) {
            return undefined;
        }

        if (attrValue) {
            console.log(attrValue === el.getAttribute(attrName));
            return el.getAttribute(attrName).replace(/[\s\n]/g, '').toLowerCase() === attrValue.replace(/[\s\n]/g, '').toLowerCase();
        }

        return el.hasAttribute(attrName);
    }


    function hasAttrContains(selector, attrName, attrValue) {
        let el = target.querySelector(selector);

        if (!el) {
            return undefined;
        }

        if (attrValue) {
            console.log(attrValue === el.getAttribute(attrName));
            return el.getAttribute(attrName).replace(/[\s\n]/g, '').toLowerCase().indexOf(attrValue.replace(/[\s\n]/g, '').toLowerCase()) !== -1;
        }

        return el.hasAttribute(attrName);
    }

    function elementOrdersString() {
        let ordered = true;
        let lastIndex = -1, currentIndex = -1;
        let log = ``;
        let args = Array.from(arguments);
        let useDocHTML = false;

        if (typeof args[0] === "boolean") {
            useDocHTML = args.shift();
        }

        let innerHTML = (useDocHTML ? docHTML : target.innerHTML).toLowerCase();

        args.some((text, i) => {
            let checkText = cleanup(text).toLowerCase();
            currentIndex = innerHTML.indexOf(checkText);
            log += `-- ${checkText} (${currentIndex})\n`
            if (currentIndex < lastIndex) {
                ordered = false;
            } else {
                lastIndex = currentIndex;
            }
            return !ordered;
        });
        console.log(`elementOrdersString\n`, log);
        return ordered;
    }

    function isEmpty(selector, all) {
        let items = all ? Array.from(target.querySelectorAll(selector)) : [querySelector.querySelector(selector)];
        let empty = false;

        items.some(item => {
            empty = item.innerText.replace(/\s/g, '').length === 0;
            return empty;
        });
        return empty;
    }

    function docAttr(attrName, attrValue) {
        return _doc[attrName] = attrValue
    }

    function docCountHTML(input) {
        let checkText = cleanup(input).toLowerCase();
        let matches = _docHTML.toLowerCase().match(new RegExp(checkText, 'g'));
        console.log("docCountHTML", matches, checkText, _docHTML);
        return matches ? matches.length : 0;
    }



    function docElementOrdersString() {
        let ordered = true;
        let lastIndex = -1, currentIndex = -1;
        let log = ``;
        let innerHTML = _docHTML.toLowerCase();
        Array.from(arguments).some((text, i) => {
            let checkText = cleanup(text).toLowerCase();
            currentIndex = innerHTML.indexOf(checkText);
            log += `-- ${checkText} (${currentIndex})\n`
            if (currentIndex === -1 || currentIndex < lastIndex) {
                ordered = false;
            } else {
                lastIndex = currentIndex;
            }
            return !ordered;
        });
        console.log(`elementOrdersString\n`, log, innerHTML);
        return ordered;
    }

    let tests = getTests(testTarget);
    tests.forEach(test => {
        // console.log(`${test.element.innerText}:`, eval(test.description));
        try {
            if (eval(test.description)) {
                test.checkbox.checked = true;
                test.element.classList.remove("task-failed");
                test.element.classList.add("task-passed");
            } else {
                test.checkbox.checked = false;
                test.element.classList.remove("task-passed");
                test.element.classList.add("task-failed");
            }
        } catch (err) {
            console.log(`Test invalid`, test.description, err.toString())
        }
    })
}

function getTests(ul) {
    let tests = [];
    Array.from(ul.children).forEach(li => {
        let match = li.innerHTML.match(/<!--(.*)-->$/)
        let description = match ? match[1] : undefined;
        if (!description) {
            console.warn(`Test not valid`, match)
            return;
        }
        tests.push({
            checkbox: li.querySelector("input"),
            element: li,
            description
        })
    })
    return tests;
}