// Get the login button and add an event listener to it
const loginBtn = document.querySelector('button[type="submit"]');
loginBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the form from submitting by default

  // Get the entered username and password
  const enteredUsername = document.querySelector('input[name="uname"]').value;
  const enteredPassword = document.querySelector('input[name="psw"]').value;

  // Check if the entered username and password match the correct values
  if (enteredUsername === "correctusername" && enteredPassword === "correctpassword") {
    // If they match, submit the form
    document.querySelector('form').submit();
  } else {
    // If they don't match, show an error message or do something else
    alert("Incorrect username or password. Please try again.");
  }
});
