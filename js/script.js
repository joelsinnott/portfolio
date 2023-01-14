function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 27) {
        var menu = document.getElementById("menu");
        if (menu.classList.contains("active")) {
            toggleMenu();
        }
    }
});

window.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("click", function(e) {
        var menu = document.getElementById("menu");
        var menuIcon = document.querySelector(".menu-icon");
        if (!menu.contains(e.target) && !menuIcon.contains(e.target) && menu.classList.contains("active")) {
            toggleMenu();
        }
    });
});