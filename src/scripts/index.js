const userTextArea = document.getElementById("encrypt-decrypt");
const resultTextArea = document.querySelector(".result");
let resultContent = false;

function encrypt() {
  const encryptText = userTextArea.textContent
    .replaceAll("a", "ai")
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  changeText(encryptText);
}

function decrypt() {
  const decryptText = userTextArea.textContent
    .replaceAll("ufat", "u")
    .replaceAll("ober", "o")
    .replaceAll("imes", "i")
    .replaceAll("enter", "e")
    .replaceAll("ai", "a");

  changeText(decryptText);
}

function changeText(text) {
  if (userTextArea.textContent.trim() !== "") {
    resultTextArea.innerHTML = `<p class="result__content">${text}</p>`;
    resultContent = true;
  } else {
    resultTextArea.innerHTML = `<img src="./src/assets/images/no-message.png" alt="No Message" />
    <h3>Nenhuma mensagem encontrada</h3>
        <p>Digite um texto que você deseja criptografar ou descriptografar.</p>`;
    resultContent = false;
  }
}

resultTextArea.addEventListener("click", (copy) => {
  if (resultContent) {
    const contentToCopy = copy.target.textContent;
    navigator.clipboard
      .writeText(contentToCopy)
      .then(console.log("Texto copiado com sucesso!"))
      .catch((err) => console.error("Erro ao copiar o texto: ", err));
  }
});
