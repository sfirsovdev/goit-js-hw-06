/**Напиши скрипт, который реагирует на изменение 
* значения input#font-size-control 
* (событие input) и изменяет инлайн-стиль 
* span#text обновляя свойство font-size. 
* В результате при перетаскивании 
* ползунка будет меняться размер текста. */


const refs = {
inputEl: document.querySelector('#font-size-control'),
textEl: document.querySelector('#text')
};

const { inputEl, textEl } = refs;

function onSizeChange() {
textEl.style.fontSize = inputEl.value + "px";
};

inputEl.addEventListener('input', onSizeChange)