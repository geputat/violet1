document.addEventListener('DOMContentLoaded', function() {
    // Get the login and password input fields
    let emailInput = document.querySelector('#exampleInputEmail1');
    let passwordInput = document.querySelector('#exampleInputPassword1');
    let loginButton = document.querySelector('button[type="submit"]');

    // Get the registered users from the previous registration code
    let users = JSON.parse(localStorage.getItem('users')) || {};

    // Add an event listener to the login button
    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the entered email and password
        let email = emailInput.value;
        let password = passwordInput.value;

        // Check if the user is registered
        let isUserFound = false;
        for (let userId in users) {
            if (users[userId].login === email && users[userId].password === password) {
                isUserFound = true;
                break;
            }
        }

        // If the user is found, redirect to the index_orders.html page
        if (isUserFound) {
            window.location.href = 'index_orders.html';
        } else {
            // If the user is not found, show an error message
            alert('Такого пользователя не существует. Повторите попутку.');
        }
    });
});