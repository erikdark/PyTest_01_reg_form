
const form = document.getElementById('registration-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    

    console.log('Данные формы:', {
        username,
        email,
        password
    });
});
