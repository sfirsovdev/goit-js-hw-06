/**Обработка отправки формы form.login-form 
 * должна быть по событию submit.
При отправке формы страница не должна 
перезагружаться.
Если в форме есть незаполненные поля, 
выводи alert с предупреждением о том, 
что все поля должны быть заполнены.
Если пользователь заполнил все поля и 
отправил форму, собери значения полей в обьект, 
где имя поля будет именем свойства, а значение 
поля - значением свойства. Для доступа к 
элементам формы используй свойство elements.
Выведи обьект с введенными данными в консоль и 
очисти значения полей формы методом reset */

const form = document.querySelector('.login-form');

const onSubmit = event => {
event.preventDefault();
const options = {
    Email: event.currentTarget.elements.email.value.trim(),
    Password: event.currentTarget.elements.password.value.trim(),
};
if (!options.Email || !options.Password) return alert('Please, fill in all fields');
console.log(options);
form.reset();
};

form.addEventListener('submit', onSubmit);
