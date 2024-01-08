let prev = null;
document.querySelectorAll('.radio-child input').forEach(element => {
    var parent = element.parentNode;
    const currentColor = getComputedStyle(parent).getPropertyValue('color');
    element.addEventListener('change', () => {
        if (element.checked) {
            parent.style.color = 'var(--Black)';
            if (prev !== null) {
                prev.style.color = currentColor;
            }
            prev = parent;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();

        // Validation flags
        let isValid = true;
        let messages = [];

        // Validate Username
        let username = document.getElementById('username').value;
        if (!username.trim()) {
            isValid = false;
            messages.push('Username is required.');
        }

        // Validate Password
        let password = document.getElementById('password').value;
        if (!password) {
            isValid = false;
            messages.push('Password is required.');
        }

        // Validate Role Selection
        const selectedRoleRadio = document.querySelector('input[name="role"]:checked');
        if (!selectedRoleRadio) {
            isValid = false;
            messages.push('Please select a role.');
        }

        // If validation fails, display the errors and return
        if (!isValid) {
            alert(messages.join('\n'));
            return;
        }

        const selectedRole = selectedRoleRadio.value;
        const paths = {
            'admin': '../../admin/pages/home.html',
            'doctor': '../../dokter/pages/home.html',
            'nurse': '../../suster/pages/home.html'
        };

        const page = paths[selectedRole];
        if (!page) {
            alert('The selected role does not have an associated page.');
            return;
        }
        
        // Redirect to the appropriate page
        window.location.href = page;
    });
});