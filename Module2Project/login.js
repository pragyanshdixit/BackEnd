const usernamaeInput = document.getElementById('username');

const emailInput = document.getElementById('email');

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function() {
    const username = usernamaeInput.value;
    const email = emailInput.value;

    if (username && email) {
        alert(`Welcome, ${username}! Your email is ${email}.`);
    } else {
        alert('Please enter both username and email.');
    }
});