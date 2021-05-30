
//alert("connected");

window.onload = function () {
var toggle = document.querySelector("#toggle");

toggle.onclick = toggleMenu;

}
function toggleMenu(){
    var menu = document.querySelector("#header-navigation .menu");
    menu.classList.toggle("show-small");
}