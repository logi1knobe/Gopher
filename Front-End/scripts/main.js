
var CurrentColor = localStorage.getItem("CurrentColor");

if  (CurrentColor == "light") {
    document.getElementById('Cssheet').href='/Themes/Light.css';
    localStorage.setItem("CurrentColor", "light");
} else {
    document.getElementById('Cssheet').href='/Themes/UltraLight.css';
    localStorage.setItem("CurrentColor", "UltraLight");       
} else if {
    document.getElementById('Cssheet).href='/Themes/Dark.css';
    localStorage.setItem("CurrentColor", "Dark");
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
