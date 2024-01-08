document.getElementById('form-doctor').addEventListener('submit', function(e){
    e.preventDefault();

    let isValid = true;
    let messages = [];

    let fullName = document.getElementById('name').value.trim();
    let specialization = document.getElementById('specialization').value.trim();
    let uname = document.getElementById('uname').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let email = document.getElementById('email').value.trim();

    // calling validation functions
    valName(fullName);
    valSpc(specialization);
    valUname(uname);
    valPhone(phone);
    valEmail(email);

    // Show messages or submit the form
    if (!isValid) {
        alert(messages.join('\n'));
    } else {
        alert("Add doctor successful. Please click 'OK' to continue.");
        // Redirect after successful validation
        window.location.href = 'home.html';
    }

    // Defining validation functions
    function valName(fullName){
        let regex = /^[a-zA-Z ]+$/;
        if(!fullName){
            isValid = false;
            messages.push('Full Name is required.');
        }
        else if(!regex.test(fullName)){
            isValid = false;
            messages.push('Full Name must be alphabetical.');
        }
    }

    function valSpc(specialization){
        if(!specialization){
            isValid = false;
            messages.push('Specialization is required.');
        }
    }

    function valUname(uname){
        if(!uname){
            isValid = false;
            messages.push('Username is required.');
        }
    }

    function valPhone(phone){
        let regex = /^[0-9]+$/;
        if(!phone){
            isValid = false;
            messages.push('Phone number is required.');
        }
        else if(!regex.test(phone)){
            isValid = false;
            messages.push('Please enter a valid phone number.');
        }
    }

    function valEmail(email){
        let regex = /^\S+@\S+\.\S+$/;
        if(!email){
            isValid = false;
            messages.push('Email is required.');
        }
        else if(!regex.test(email)){
            isValid = false;
            messages.push('Please enter a valid email address.');
        }
    }
})

