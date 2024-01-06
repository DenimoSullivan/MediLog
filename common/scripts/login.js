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
        }
        prev=parent;
    })
});

function redirect(e, page){
    e.preventDefault();
    window.location.href = page;
}