// USE THIS INSTEAD OF main.js when in the pages of games!!!

let logId = sessionStorage.getItem("loggedIn");
	
if (logId !== "2d601948-1c5b-4df7-856b-f114f250a027") {
  window.location.href = "/index.html"; // Redirect to login page
}
