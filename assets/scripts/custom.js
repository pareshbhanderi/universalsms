/**
 * Custom js
 */

/******** Main Menu Sidebar Navigation *********/
$(document).on("click", ".hamburger-menu", openMenu);

$(document).on("click", ".sidebar-navigation-close .closebtn", closeMenu);

$(document).on("click", ".nop-filter-overlay", closeMenu);

function openMenu() {
    $(".section-wrapper .sidebar-navigation").addClass("activesidebar");
    $("body").addClass("hidescroll");
    $('<div class="nop-filter-overlay"><\/div>').appendTo(".body-wrapper")
}

function closeMenu() {
    $(".section-wrapper .sidebar-navigation").removeClass("activesidebar");
    $("body").removeClass("hidescroll");
    $(".nop-filter-overlay").remove()
}

$("#backButton").click(function() {
    window.history.back();
});