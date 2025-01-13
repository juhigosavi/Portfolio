document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.toggle-panel .btn.register-btn');
    const loginBtn = document.querySelector('.toggle-panel .btn.login-btn');

    // Toggle between login and register forms
    registerBtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
    });

    // Mock database for storing user data
    const users = [];

    // Registration functionality
    document.querySelector('.form-box.register form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = e.target.querySelector('input[placeholder="Username"]').value;
        const email = e.target.querySelector('input[placeholder="Email"]').value;
        const password = e.target.querySelector('input[placeholder="Password"]').value;

        if (users.some(user => user.email === email)) {
            alert('User already exists!');
        } else {
            users.push({ username, email, password });
            alert('Registration successful! Please login.');
            container.classList.remove('active');
        }
    });

    // Login functionality
    document.querySelector('.form-box.login form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = e.target.querySelector('input[placeholder="Username"]').value;
        const password = e.target.querySelector('input[placeholder="Password"]').value;

        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            alert('Login successful!');
            window.location.href = 'secured.html'; // Redirect to secured page
        } else {
            alert('Invalid username or password!');
        }
    });
});
