function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform authentication logic here
    // For demonstration, let's check if the username and password are not empty
    if (username && password) {
        // Redirect to dashboard page on successful login
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
}

function showCreateForm() {
    document.getElementById('loginForm').style.display = 'none'; // Hide login form
    document.getElementById('createForm').style.display = 'flex'; // Show create account form
}

function hideCreateForm() {
    document.getElementById('createForm').style.display = 'none'; // Hide create account form
    document.getElementById('loginForm').style.display = 'flex'; // Show login form
}

function saveAccount() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Perform account creation logic here
    // For demonstration, alert the created account details
    alert(`Account created successfully!\nUsername: ${newUsername}\nPassword: ${newPassword}`);

    // Go back to login form after saving account
    hideCreateForm();
}