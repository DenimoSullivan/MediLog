let prev = null;
document.querySelectorAll('.radio-child input').forEach(element => {
    var parent = element.parentNode;
    const currentColor = getComputedStyle(parent).getPropertyValue('color');
    element.addEventListener('change', ()=>{
        if(element.checked){
            parent.style.color = 'var(--Black)';
            if(prev !== null){
                prev.style.color = currentColor;
            }
            prev=parent;
        }
    });
});

function redirect(e) {
    e.preventDefault();
    // Check if any of the role radio buttons is checked
    const selectedRoleRadio = document.querySelector('input[name="role"]:checked');
    if (!selectedRoleRadio) {
        alert('Please select a role.');
        return;
    }
    
    // Get the value of the selected radio button
    const selectedRole = selectedRoleRadio.value;
    
    // Define the redirection paths for each role
    const paths = {
        'admin': '../../admin/pages/home.html',
        'doctor': '../../dokter/pages/home.html',
        'nurse': '../../suster/pages/home.html'
    };

    // Check if the selected role has a defined redirection path
    const page = paths[selectedRole];
    if (!page) {
        alert('The selected role does not have an associated page.');
        return;
    }
    
    // Redirect to the appropriate page
    window.location.href = page;
}
