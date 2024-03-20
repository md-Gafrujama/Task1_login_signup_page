function validateContactForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true;

    if (fullName === '') {
      document.getElementById('fullNameError').innerText = 'Please enter your full name.';
      isValid = false;
    } else {
      document.getElementById('fullNameError').innerText = '';
    }

    if (email === '') {
      document.getElementById('emailError').innerText = 'Please enter your email address.';
      isValid = false;
    } else if (!isValidEmail(email)) {
      document.getElementById('emailError').innerText = 'Please enter a valid email address.';
      isValid = false;
    } else {
      document.getElementById('emailError').innerText = '';
    }

    if (message === '') {
      document.getElementById('messageError').innerText = 'Please enter your message.';
      isValid = false;
    } else {
      document.getElementById('messageError').innerText = '';
    }

    return isValid;
  }

  function validateLoginForm() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    let isValid = true;

    if (username === '') {
      document.getElementById('usernameError').innerText = 'Please enter your username.';
      isValid = false;
    } else {
      document.getElementById('usernameError').innerText = '';
    }

    if (password === '') {
      document.getElementById('passwordError').innerText = 'Please enter your password.';
      isValid = false;
    } else {
      document.getElementById('passwordError').innerText = '';
    }

    return isValid;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }