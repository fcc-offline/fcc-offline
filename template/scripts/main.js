// Initate codeflask

const cf = new CodeFlask("#ffc-editor", {
    language: 'html',
    lineNumbers: true
});

const viewer = document.querySelector(".fcc-viewer");

cf.onUpdate(code => {
    viewer.innerHTML = code;
})