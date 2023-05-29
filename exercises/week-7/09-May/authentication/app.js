const loginForm = document.querySelector('#login-form');
const welcomeMessage = document.querySelector('#welcome-message');
const errorMessage = document.querySelector('#error-message');
const usernameSpan = document.querySelector('#username-span');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values of the username and password fields
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // Fetch the list of users from the server
  fetch('users.json')
    .then(response => response.json())
    .then(data => {
      const users = data.users;

      // Check if the user's credentials match any of the users in the list
      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        // Display a welcome message with the user's username
        usernameSpan.textContent = user.username;
        welcomeMessage.style.display = 'block';
        errorMessage.style.display = 'none';
      } else {
        // Display an error message
        errorMessage.style.display = 'block';
        welcomeMessage.style.display = 'none';
      }
    })
    .catch(error => {
      console.error(error);
    });
});
