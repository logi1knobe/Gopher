
localStorage.setItem("CurrentColor", "classic");       

if  (CurrentColor === "light") {
    document.getElementById('Cssheet').href='/Themes/Light.css';
    localStorage.setItem("CurrentColor", "light");
} else {
    document.getElementById('Cssheet').href='/Themes/Dark.css';
    localStorage.setItem("CurrentColor", "classic");       
}



function ChangeTheme() {

    var CurrentColor = document.getElementById("CurrentColor").value;

    if  (CurrentColor === "classic") {
        document.getElementById('Cssheet').href='/Themes/Light.css';
        localStorage.setItem("CurrentColor", "light");
    } else {
        document.getElementById('Cssheet').href='/Themes/Dark.css';
        localStorage.setItem("CurrentColor", "classic");       
    }
  }