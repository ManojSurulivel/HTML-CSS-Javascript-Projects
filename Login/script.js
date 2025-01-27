const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const loginButton = document.getElementById('loginBtn');
const customAlert = document.getElementById('customAlert');
const alertMessage = document.getElementById('alertMessage');
const closeAlert = document.getElementById('closeAlert');

// Function to show the custom alert
function showAlert(message) {
    alertMessage.textContent = message;
    customAlert.style.display = 'flex';
}

// Close alert functionality
closeAlert.addEventListener('click', () => {
    customAlert.style.display = 'none';
});

// Toggle password visibility
togglePassword.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;

    // Change the icon based on visibility
    togglePassword.textContent = type === 'password' ? '\u{1F441}' : '\u{1F576}'; // Eye icon
});

// Validate inputs and trigger the custom alert
loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '') {
        showAlert('Username cannot be empty.');
        return;
    }

    if (password === '') {
        showAlert('Password cannot be empty.');
        return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!passwordRegex.test(password)) {
        showAlert(
            'Password must be at least 8 characters long and include letters, numbers, and special characters.'
        );
        return;
    }

    showAlert('Login Successful!');
});
