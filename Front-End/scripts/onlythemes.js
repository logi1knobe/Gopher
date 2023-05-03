function ChangeTheme() {

    if  (CurrentColor == "classic") {
        localStorage.setItem("CurrentColor", "light");
        location.reload()
    } else {
        localStorage.setItem("CurrentColor", "classic");   
        location.reload()
    
    }
  }
