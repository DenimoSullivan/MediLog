document.addEventListener("DOMContentLoaded", function () {
    let activeContentElement = null;

    const pens = document.getElementsByClassName("pen");

    Array.from(pens).forEach(function (pen) {
        pen.addEventListener("click", function () {
            const contentElement = pen.closest('.detail').querySelector('.content');
            toggleEditMode(contentElement);
        });
    });

    function toggleEditMode(contentElement) {
        if (activeContentElement && activeContentElement !== contentElement) {
            // Disable edit mode for the previously active content
            activeContentElement.contentEditable = "false";
            activeContentElement.classList.remove('edit-mode');
        }

        if (contentElement.contentEditable === "true") {
            // Disable edit mode for the clicked content
            contentElement.contentEditable = "false";
            contentElement.classList.remove('edit-mode');
            activeContentElement = null;
        } else {
            // Enable edit mode for the clicked content
            contentElement.contentEditable = "true";
            contentElement.classList.add('edit-mode');
            activeContentElement = contentElement;
        }
    }
});