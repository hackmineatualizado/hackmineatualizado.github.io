const container = document.querySelector(".notification");
function createNotification() {
  const notification = document.createElement("div");
  notification.classList.add("toast");
  notification.innerHTML = `Operação próxima do fim. Aproveite gratuitamente!
  <a href="https://www.betsury.com/?p=UU7gxMgM&lang=pt" target="_blank"
        ><button id="cadastro" class="cadastro">Cadastre-se Aqui</button></a
      >
  `;

  container.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

setTimeout(() => {
  createNotification();
}, 5000);
