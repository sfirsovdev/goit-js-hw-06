//Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

/*Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue.
*/

let counterValue = 0;
const btnMinus = document.querySelector("[data-action = 'decrement']");
const btnPlus = document.querySelector("[data-action = 'increment']");
const btnValue = document.querySelector('#value');

const btnDecrement = () => {
counterValue -= 1;

btnValue.textContent = counterValue;
};

const btnIncrement = () => {
counterValue += 1;

btnValue.textContent = counterValue;

};


btnMinus.addEventListener("click", btnDecrement);
btnPlus.addEventListener("click", btnIncrement);