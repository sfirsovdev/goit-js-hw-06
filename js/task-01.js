// 1 задание

// 1 Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) 
//и количество элементов в категории(всех вложенных в него < li >).



const items = document.querySelectorAll('li.item');		
console.log(`Number of categories: ${items.length}`);

items.forEach(document => {		
const category = document.querySelector('h2');		
console.log(`Category: ${category.textContent}`);

const elem = document.querySelectorAll('li');		
console.log(`Elements: ${elem.length}`) 		
});