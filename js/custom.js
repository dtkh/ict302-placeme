/**
 * JavaScript to set the navigation menu to sticky.
 */

window.onscroll = function() {
    stickyMenu();
};

// Get the navbar
var navbar = document.getElementById("navbar");

function stickyMenu() {
    if (window.pageYOffset > 0) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

/**
 * JavaScript to show or hide the mobile menu.
 */
document.getElementById("hamburger-menu").addEventListener("click", openMenu);

function openMenu() {
    event.stopImmediatePropagation();

    if (document.getElementById("menu").style.right === "0px") {
        document.getElementById("menu").style.right = "-200px";
    } else {
        document.getElementById("menu").style.right = "0";
    }

    window.addEventListener("click", closeMenu);
}

function closeMenu() {
    let path = event.path;

    if(path[3].id !== "menu" && path[3].id !== "header") {
        document.getElementById("menu").style.right = "-200px";
    }
}