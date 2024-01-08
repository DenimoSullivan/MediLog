let prev = null;
document.querySelectorAll('.radio-opt input').forEach(element => {
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