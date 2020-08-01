
function InlineTest({
    testSelector,
    targetSelector
}) {

    let testTarget = document.querySelector(testSelector); // should be a ul
    if (!testTarget) {
        console.log(`Not test found`);
        return;
    }

    const target = document.querySelector(targetSelector);
    if (!target) {
        console.log(`Target test found`);
        return;
    }

    function innerText(selector) {
        let el = target.querySelector(selector);
        return el ? el.innerText : undefined;
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

    function hasText(text) {
        let checkText = cleanup(text);
        return target.innerText.indexOf(checkText) !== -1;
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
            if (currentIndex < lastIndex) {
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
            console.log(el[attrName] === attrValue, el[attrName], attrValue, )
            return el[attrName] === attrValue;
        }

        return el.hasAttribute(attrName);
    }

    function elementOrdersString() {
        let ordered = true;
        let lastIndex = -1, currentIndex = -1;
        let log = ``;
        let innerHTML = target.innerHTML.toLowerCase();
        Array.from(arguments).some((text, i) => {
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