document.getElementById('form-patient').addEventListener('submit', function(e){
    e.preventDefault();

    let isValid = true;
    let messages = [];

    let fullName = document.getElementById('name').value.trim();
    let gender = document.getElementsByName('gender');
    let disease = document.getElementById('disease').value.trim();
    let dob = document.getElementById('dob').value;
    let age = document.getElementById('age').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let email = document.getElementById('email').value.trim();
    let ascDoctor = document.getElementById('asc-doctor').value.trim();

    // calling validation functions
    valName(fullName);
    valGender(gender);
    valDisease(disease);
    valDob(dob);
    valAge(age);
    valPhone(phone);
    valEmail(email);
    valDoc(ascDoctor);

    // Show messages or submit the form
    if (!isValid) {
        alert(messages.join('\n'));
    } else {
        alert("Add patient successful. Please click 'OK' to continue.");
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

    function valGender(gender){
        isValid = false;
        for(let i=0; i < gender.length; i++){
            if(gender[i].checked){
                isValid = true;
            }
        }

        if(!isValid){
            messages.push('Gender is required.');
        }
    }

    function valDisease(disease){
        if(!disease){
            isValid = false;
            messages.push('Disease is required.');
        }
    }

    function valDob(dob){
        var input = new Date(dob);
        var today = new Date();

        if(!dob){
            isValid = false;
            messages.push('Date of birth is required.');
        }
        else if(input > today){
            isValid = false;
            messages.push('Date of birth cannot be in the future.');
        }
    }

    function valAge(age){
        let regex = /^[0-9]+$/;
        if(!age){
            isValid = false;
            messages.push('Age is required.');
        }
        else if(!regex.test(age)){
            isValid = false;
            messages.push('Please enter a valid age.');
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

    function valDoc(ascDoctor){
        if(!ascDoctor){
            isValid = false;
            messages.push('Please enter the doctor that handles this patient.');
        }
    }
})

