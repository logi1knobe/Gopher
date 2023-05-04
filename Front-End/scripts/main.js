// Changes CSS color if one is set

var CurrentColor = localStorage.getItem("CurrentColor");

if  (CurrentColor == "light") {
    document.getElementById('Cssheet').href='/Themes/Light.css';
    localStorage.setItem("CurrentColor", "light");
} else {
    document.getElementById('Cssheet').href='/Themes/Dark.css';
    localStorage.setItem("CurrentColor", "classic");       
}


// Checks for password

// DO NOT USE THIS IF IT IS ON A GAME PAGE!!!

let logId = sessionStorage.getItem("loggedIn");
	
if (logId !== "2d601948-1c5b-4df7-856b-f114f250a027") {
  window.location.href = "/index.html"; // Redirect to login page
}


// sets CSS color
function ChangeTheme() {

    if  (CurrentColor == "classic") {
        localStorage.setItem("CurrentColor", "light");
        location.reload()
    } else {
        localStorage.setItem("CurrentColor", "classic");   
        location.reload()
    
    }
  }

hashCode = function(s) {
  return s.split("").reduce(function(a, b) {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
}
