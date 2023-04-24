const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  if (username === 'myusername' && password === 'mypassword') {
    alert('Login successful!');
  } else {
    alert('Incorrect username or password');
  }
});
