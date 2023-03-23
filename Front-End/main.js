document.getElementById("loginform").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "generate_token.py", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        if (response.valid) {
          sessionStorage.setItem("loggedIn", true);
          window.location.href = "main.html";
        } else {
          alert("Wrong username or password");
        }
      } else {
        alert("Error: " + xhr.statusText);
      }
    }
  };
  xhr.send("username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password));
});
