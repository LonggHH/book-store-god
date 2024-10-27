const passwordInput = document.getElementById('password-input');
passwordInput.addEventListener('input', () => {
  passwordInput.type = 'password';
  passwordInput.value = passwordInput.value.replace(/./g, '*');
});
