// Função para formatar o tempo no formato hh:mm:ss
function formatTime(time) {
  var hours = Math.floor(time / 3600);
  var minutes = Math.floor((time % 3600) / 60);
  var seconds = time % 60;

  // Adiciona um zero à esquerda se o valor for menor que 10
  var formattedTime =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  return formattedTime;
}

// Função para atualizar o timer regressivo
function updateTimer(time) {
  var timerElement = document.getElementById("timer");
  timerElement.textContent = formatTime(time);

  // Reduz o tempo em 1 segundo
  time--;

  // Quando o tempo atingir 0, reinicie o timer
  if (time < 0) {
    time = 3600; // 3 horas em segundos
  }

  // Chama a função updateTimer novamente após 1 segundo (1000 milissegundos)
  setTimeout(function () {
    updateTimer(time);
  }, 1000);
}

// Chama a função updateTimer quando a página é carregada
window.onload = function () {
  var initialTime = 3600; // 3 horas em segundos
  updateTimer(initialTime);
};
