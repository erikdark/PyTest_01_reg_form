
const form = document.getElementById('registration-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Отменить стандартную отправку формы

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Проверка заполненности всех полей
    if (username && email && password) {

        const successMessage = document.getElementById('success-message');
        successMessage.textContent = 'Вы успешно зарегистрированы!';
        successMessage.style.display = 'block';

    
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'none';
    } else {

        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Пожалуйста, заполните все поля.';
        errorMessage.style.display = 'block';

        
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'none';
    }
});
