document.getElementById('register-form').addEventListener('submit', function(event){
    event.preventDefault();

    let isValid = true;
    let messages = [];

    // Validate Full Name
    let fullName = document.getElementById('name').value;
    if (!fullName) {
        isValid = false;
        messages.push('Full Name is required.');
    }

    // Validate Username
    let username = document.getElementById('username').value;
    if (!username) {
        isValid = false;
        messages.push('Username is required.');
    }

    // Validate Email
    let email = document.getElementById('email').value;
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        isValid = false;
        messages.push('Please enter a valid email address.');
    }

    // Validate Phone Number
    let phone = document.getElementById('phone').value;
    if (!phone) {
        isValid = false;
        messages.push('Phone Number is required.');
    }

    // Validate Passwords
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmpass').value;

    if(!password){
        isValid = false;
        messages.push('Please enter a password.');
    }

    if (password !== confirmPassword) {
        isValid = false;
        messages.push('Passwords do not match.');
    }

    // Check Terms and Conditions
    let isTermsChecked = document.getElementById('agree').checked;
    if (!isTermsChecked) {
        isValid = false;
        messages.push('You must agree to the Terms & Conditions.');
    }

    // Show messages or submit the form
    if (!isValid) {
        alert(messages.join('\n'));
    } else {
        alert("Registration successful. Please click 'OK' to continue.");
        // Redirect after successful validation
        window.location.href = 'home.html';
    }
});
