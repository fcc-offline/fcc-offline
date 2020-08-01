// Initate codeflask

const cf = new CodeFlask("#ffc-editor", {
    language: 'html',
    lineNumbers: true
});

const viewer = document.querySelector(".fcc-viewer");

cf.onUpdate(code => {
    viewer.innerHTML = code;
})

// Init test
if (InlineTest) {
    let testBtn = createTestButton("#testPanel");

    function startTest() {
      InlineTest({
        testSelector: ".fcc-content > ul",
        targetSelector: ".fcc-viewer",
      });
    }
    testBtn.addEventListener("click", startTest);
  }

function createTestButton(insertTarget) {
    let btn = document.createElement("button");
    btn.innerText = "Check result";
    btn.className = "btn-test";

    if (insertTarget) {
        let target = document.querySelector(insertTarget);
        target && target.appendChild(btn);
    }
    return btn;
}