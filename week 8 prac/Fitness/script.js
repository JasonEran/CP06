// Hamburger menu function 
function hamburger() { 
    var menu = document.getElementById("menu-links"); 
    var logo = document.getElementById("ffc-logo"); 
    if (menu.style.display === "block" && logo.style.display === "block") { 
        menu.style.display = "none"; 
        logo.style.display = "block"; 
    } else { 
        menu.style.display = "block"; 
        logo.style.display = "block"; 
    } 
}

// ValidateForm
function validateForm() { 
    var fname = document.forms["myForm"]["fName"].value; 
    var lname = document.forms["myForm"]["lName"].value;
    var email = document.forms["myForm"]["email"].value; 
    var phone = document.forms["myForm"]["phone"].value;

    if (fname == "") { 
        alert("First name must be filled out"); 
        return false; 
    } 
    if (lname == "") {
        alert("Last name must be filled out");
        return false;
    }
    if (email == "") { 
        alert("Email must be filled out"); 
        return false; 
    }
    if (phone == "") {
        alert("Phone must be filled out");
        return false;
    }
}