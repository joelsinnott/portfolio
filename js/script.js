function toggleOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.classList.toggle("active");
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
    toggleOverlay();
}

/* close menu with esc key */
document.addEventListener("keyup", function(event) {
    var menu = document.getElementById("menu");
    if (event.keyCode === 27 && menu.classList.contains("active")) {
    toggleMenu();
    }
    });

document.getElementById("overlay").addEventListener("click", function() {
    toggleMenu();
});