document.querySelectorAll('.delete-btn').forEach(function(del){
    del.addEventListener('click', function(){
        var row = del.closest('.table');
        row.remove();
        updateNo();
    })
})

function updateNo(){
    var no = document.querySelectorAll('.no');

    for (var i = 1; i < no.length; i++) {
        no[i].textContent = i;
    }
}