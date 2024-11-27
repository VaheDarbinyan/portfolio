// Открытие ссылки на проект
function openProject(url) {
    window.open(url, '_blank');
}

// Проверка формы
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        document.getElementById('form-message').innerText = 'Спасибо за ваше сообщение!';
    } else {
        document.getElementById('form-message').innerText = 'Пожалуйста, заполните все поля!';
    }
});
