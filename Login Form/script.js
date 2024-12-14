// Select the input fields, button, and add event listener
const usernameInput = document.querySelector('.input-box input[type="text"]');
const passwordInput = document.querySelector('.input-box input[type="password"]');
const loginButton = document.querySelector('.submit-btn');

// Function to validate inputs
function validateInputs() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === "") {
    alert("Username cannot be empty");
    return false;
  }

  if (password === "") {
    alert("Password cannot be empty");
    return false;
  }

  return { username, password };
}

// Event listener for login button
loginButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form from submitting
  
  const validatedInputs = validateInputs();
  if (validatedInputs) {
    console.log("Login successful!");
    console.log(`Username: ${validatedInputs.username}`);
    console.log(`Password: ${validatedInputs.password}`);
    alert("Login Successful!");
  }
});
