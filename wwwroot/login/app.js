const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const validateLogin = async () => {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    const response = await fetch('https://localhost:7174/api/Auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Username: enteredUsername,
            Password: enteredPassword,
        }),
    });

    if (response.ok) {
        const result = await response.json();
        swal("Felicidades!", "!Inicio de Seccion Completado!", "success");
        window.location.href = '../vistaFront/index.html';

    } else {
        const errorResult = await response.json();
        swal("Error!", "¡Error al iniciar sesión!", "error");
    }
};