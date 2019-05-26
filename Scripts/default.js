// function for displaying the menu dropdown
function displayMenu() {
    var x = document.getElementById("navBar");
    if (x.className == "myNavList") {
        x.classList.add("responsive");
    } else {
        x.classList.remove("responsive");
    }
}
