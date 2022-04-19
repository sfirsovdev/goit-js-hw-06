/**Используй массив объектов images для 
 * создания элементов <img> вложенных в <li>. 
 * Для создания разметки используй шаблонные 
 * строки и метод insertAdjacentHTML().
Все элементы галереи должны добавляться в DOM 
за одну операцию вставки.
Добавь минимальное оформление галереи 
флексбоксами или гридами через CSS классы. */


const images = [
	{		
		url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',		
		alt: 'White and Black Long Fur Cat',		
		},
		{
	
		url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
		alt: 'Orange and White Koi Fish Near Yellow Koi Fish',		
		},		
		{
		
		url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',		
		alt: 'Group of Horses Running',		
		},		
	];
		
		/*const galleryEl = document.querySelector('.gallery');
		galleryEl.setAttribute('style', 'display: flex; list-style-type: none;');
		console.log(galleryEl);
		images.forEach(el => {
		galleryEl.insertAdjacentHTML('afterbegin', `<li><img src = '${el.url}' alt = '${el.alt}' width = "200" height = "100" /></li>`);
				
		});*/

		const galleryEl = document.querySelector('.gallery');
          const markup = images
          .map(image => {
			return `<li><img src = '${image.url}' alt = '${image.alt}' width = "200" height = "100"></li>`;
          })
        .join('');
        galleryEl.insertAdjacentHTML('afterbegin', markup);
		galleryEl.setAttribute('style', 'display: flex; list-style-type: none;');