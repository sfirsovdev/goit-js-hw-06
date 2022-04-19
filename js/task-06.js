/**Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
#validation-input {
border: 3px solid #bdbdbd;
}
#validation-input.valid {
border-color: #4caf50;
}
#validation-input.invalid {
border-color: #f44336;
}
*/


const inputValid = document.querySelector('#validation-input');

const onBlurInput = event => {

    if (event.currentTarget.value.trim().length === Number(inputValid.dataset.length)) {
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    }
};
inputValid.addEventListener('blur', onBlurInput);