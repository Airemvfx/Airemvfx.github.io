// navbar login functionality
var counter = 2;
function loginAlert() {
    // getting elements by ID and assigning them to variables
    var button = document.getElementById("loginButton");
    var fieldUser = document.getElementById("user");
    var fieldPassword = document.getElementById("password");

    var nameVal = document.forms["login"]["name"].value;
    var passVal = document.forms["login"]["password"].value;

    // log in/out functionality
    if (counter % 2 == 0) {
        if(nameVal == "" || passVal == ""){
            alert('Please enter your username and password.');
        }
        else{
            alert('You have been logged in!');
            button.innerText = "Log out";
            fieldUser.style.display = "none";
            fieldPassword.style.display = "none";
        }
    }
    else {
        alert('You have been logged out!');
        button.innerText = "Login";
        fieldUser.style.display = "";
        fieldPassword.style.display = "";
    }
    counter += 1;
}

// Events Page - Form submition functionality
function submitEvent() {
    // assignment of variables
    var title = document.forms["event"]["event_title"].value;
    var date = document.forms["event"]["event_date"].value;

    // logical operation system for security
    if (title == "") {
        alert("An event must have a title!");
    }
    else {
        if (date.length == 0) {
            alert("An event must have a date!");
        }
        else {
            alert("Event submitted! The society will contact you soon!");
        }
    }
}


// functionality inside of this function was made to be loaded only after the website loads its content.
// This is due to certain operations which need to be done before the code can be created.
window.onload = function () {
    // Greyscale filter effect:
    // The images are black and white but once hovered over them, they turn into color
    var elements = document.querySelectorAll('.fx-hover-greyscale');

    // window.onload greyscale filter (because the images are colored by default)
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.filter = "grayscale(100%)";
    }

    // eventListener for hovering greyscale animation
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", highlight);
        elements[i].addEventListener("mouseout", delight);
    }

    function highlight() {
        this.style.filter = "none";
    }
    function delight() {
        this.style.filter = "grayscale(100%)";
    }

}
