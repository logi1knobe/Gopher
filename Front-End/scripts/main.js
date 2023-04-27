
var CurrentColor = localStorage.getItem("CurrentColor");

if  (CurrentColor == "light") {
    document.getElementById('Cssheet').href='/Themes/Light.css';
    localStorage.setItem("CurrentColor", "light");
} else {
    document.getElementById('Cssheet').href='/Themes/Dark.css';
    localStorage.setItem("CurrentColor", "classic");       
}



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
