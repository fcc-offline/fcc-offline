// Initate codeflask
const cf = new CodeFlask("#ffc-editor", {
  language: 'html',
  lineNumbers: true
});

const viewer = document.querySelector(".fcc-viewer");
const frameDocument = viewer.contentDocument;

let currentCode = ``;

cf.onUpdate(code => {

  if (!asIframe) {
    code = `<!DOCTYPE html>
      <html>
        <body>${code}</body>
      </html>
      `
  }
  currentCode = code;
  frameDocument.open();
  frameDocument.write(code);
  frameDocument.close();
})

// Init test
if (InlineTest) {
  let testBtn = createTestButton("#testPanel");
  function startTest() {
    InlineTest({
      testSelector: ".fcc-content > ul",
      target: frameDocument.body,
      docHTML: currentCode
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