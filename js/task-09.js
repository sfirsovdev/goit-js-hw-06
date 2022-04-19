/** Напиши скрипт, который изменяет цвета 
 * фона элемента <body> через инлайн стиль 
 * при клике на button.change-color и выводит 
 * значение цвета в span.color.
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
Для генерации случайного цвета используй 
функцию getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const bgColor = document.querySelector('.color');

const onColorSet = btnChangeColor.addEventListener('click', () => {
  document.body.style.background = getRandomHexColor();
  bgColor.textContent = document.body.style.background;
});