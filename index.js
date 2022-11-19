const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

let idInterval = 0; //Переменная для хранения id Интервала

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    timerEl.textContent = new Date(0, 0, 0, 0, 0, seconds).toLocaleTimeString();

    //Функция для повторения раз в секунду
    function timerFunction() {
      if (seconds == 0) {
        clearInterval(timerCheck);
      } else {
        --seconds;
        timerEl.textContent = new Date(0, 0, 0, 0, 0, seconds).toLocaleTimeString();
      }
    }
    const intervalId = setInterval(timerFunction, 1000);
    return intervalId; //Возврат idИнтервала для его остановки
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.match(/\d+/g); //Очистка input от букв
});

buttonEl.addEventListener("click", () => {
  if (buttonEl.textContent == "Start") {
    const seconds = Number(inputEl.value);
    idInterval = animateTimer(seconds);
    buttonEl.textContent = "Stop";
    inputEl.value = "";
  } else {
    buttonEl.textContent = "Start";
    console.log(idInterval);
    clearInterval(idInterval);
  }
});
