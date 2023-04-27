
var CurrentColor = localStorage.getItem("CurrentColor");

if  (CurrentColor == "light") {
    document.getElementById('Cssheet').href='/Themes/Light.css';
} else if (CurrentColor == "UltraLight") {
    document.getElementById('Cssheet').href='/Themes/UltraLight.css';
} else {
    document.getElementById('Cssheet').href='/Themes/Dark.css';
    localStorage.setItem("CurrentColor", "Dark");
}




function ChangeTheme() {

    if  (CurrentColor == "classic") {
        localStorage.setItem("CurrentColor", "light");
        location.reload()
    } else if (CurrentColor == "light") {
        document.getElementById('Cssheet').href='/Themes/UltraLight.css';
        localStorage.setItem("CurrentColor", "UltraLight");
        location.reload()
    } else {
        document.getElementById('Cssheet').href='/Themes/Dark.css';
        localStorage.setItem("CurrentColor", "Dark");
        location.reload()
    }
}
