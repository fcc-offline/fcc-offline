// Initate codeflask

const cf = new CodeFlask("#ffc-editor", {
    language: 'js',
    lineNumbers: true
});

const viewer = document.querySelector(".fcc-viewer");

// INit
getCode();


document.querySelector("#execute").addEventListener("click", executeCode);
document.addEventListener("keydown", ev => {
    if (ev.metaKey) {
        switch (ev.keyCode) {
            case 83:
                console.log(`[${new Date().toLocaleString()}] save code`)
                saveCode();
                cancelEvent(ev);
                break;
            case 82:
                executeCode();
                cancelEvent(ev);
                break;
        }
    }
})

function cancelEvent(ev){
    ev.preventDefault();
    ev.stopPropagation();
    ev.stopImmediatePropagation()
}

function executeCode() {
    console.clear();
    try {
        console.log(`[${new Date().toLocaleString()}] Execute code`)
        eval(cf.getCode());
    } catch (err) {
        console.error(err)
    }
}

function getCode() {
    let code = localStorage.getItem('saved_code');
    code && cf.updateCode(code);
}

function saveCode() {
    localStorage.setItem('saved_code', cf.getCode());
}

setInterval(saveCode, 1000);