
var CurrentColor = localStorage.getItem("CurrentColor");

if  (CurrentColor === "light") {
    document.getElementById('Cssheet').href='/Themes/Light.css';
    localStorage.setItem("CurrentColor", "light");
} else {
    document.getElementById('Cssheet').href='/Themes/Dark.css';
    localStorage.setItem("CurrentColor", "classic");       
}



function ChangeTheme() {

    if  (CurrentColor === "classic") {
        document.getElementById('Cssheet').href='/Themes/Light.css';
        localStorage.setItem("CurrentColor", "light");
    } else {
        document.getElementById('Cssheet').href='/Themes/Dark.css';
        localStorage.setItem("CurrentColor", "classic");       
    }
  }