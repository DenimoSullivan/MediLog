// func buat bikin hapus atribut readonly pas diklik
function focus() {
    this.removeAttribute('readonly');
}

// func buat bikin set atribut readonly pas uda ga diklik
function blur() {
    this.setAttribute('readonly', true);
}

// ngasih event listener klo class 'content' lagi diklik, kasi fokus, else set atribut
document.querySelectorAll('.content').forEach(function (input) {
    input.addEventListener('focus', focus);

    input.addEventListener('blur', blur);
});