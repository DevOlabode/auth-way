const passwordInput = document.querySelector('#registerPassword');

passwordInput?.addEventListener('input', () => {
  const value = passwordInput.value;

  const strong =
   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(value);

  passwordInput.setCustomValidity(
    strong ? '' : 'Weak password'
  );
});
