const encriptarBtn = document.querySelector(".encriptar");
const desencriptarBtn = document.querySelector(".desencriptar");
const copyBtn = document.querySelector(".copy");
const msgInput = document.querySelector("#message");
const resultContainer = document.querySelector(".result");
const paragraph = document.querySelector(".result > p");
// const notFoundItem = document.querySelector(".item-result");
const notFoundDiv = document.getElementById("not-found");
const resultEncription = document.getElementById("result");

encriptarBtn.addEventListener("click", () => {
  console.log("ENCRIPTAR");
  let msg = msgInput.value.trim();

  if (msg.length === 0) {
    return;
  }

  msg = msg.replace(/e/gi, "\n");
  msg = msg.replace(/i/gi, "imes");
  msg = msg.replace(/a/gi, "ai");
  msg = msg.replace(/o/gi, "ober");
  msg = msg.replace(/u/gi, "ufat");

  showResult(msg);
});

desencriptarBtn.addEventListener("click", () => {
  console.log("DES - ENCRIPTAR");
  let msg = msgInput.value.trim();

  if (msg.length === 0) {
    return;
  }

  msg = msg.replace(/enter/gi, "e");
  msg = msg.replace(/imes/gi, "i");
  msg = msg.replace(/ai/gi, "a");
  msg = msg.replace(/ober/gi, "o");
  msg = msg.replace(/ufat/gi, "u");

  showResult(msg);
});

function showResult(result) {
  console.log({ result });
  paragraph.innerHTML = result;
  resultContainer.classList.remove("hidden");
  console.log({ notFoundDiv });
  notFoundDiv.setAttribute("class", "hidden");
  resultEncription.setAttribute("class", "visible");
  //   notFoundItem.hidden = true;
  //   notFoundItem.classList.add("hidden");
  console.log({ notFoundDiv });
}

msgInput.addEventListener("input", (e) => {
  if (e.target.value.length === 0) {
    notFoundDiv.setAttribute("class", "hidden");
    notFoundDiv.classList.remove("hidden");
    resultContainer.classList.add("hidden");
  }
});

copyBtn.addEventListener("click", async (e) => {
  copyText = paragraph.innerHTML;
  console.log({ copyText });
  await navigator.clipboard.writeText(copyText);
});
