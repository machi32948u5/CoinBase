// script.js - handles login and dashboard logic

// Hardcoded valid credentials (for demo only)
const validEmail = 'user@coinbase.com';
const validPassword = '123456';

// Login form handling
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === validEmail && password === validPassword) {
      sessionStorage.setItem('loggedIn', 'true');
      window.location.href = 'dashboard.html';
    } else {
      loginError.textContent = 'Invalid email or password';
    }
  });
}

// Redirect to login if not logged in on dashboard page
if (window.location.pathname.endsWith('dashboard.html')) {
  if (sessionStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'index.html';
  }
}
