function loadScreen() {
  document.getElementById("screen").innerHTML =
    '<object type="text/html" data="welcome.html"></object>';
}

function loadWelcomeScreen() {
  document.getElementById("screen").innerHTML =
    '<object id="screenObject" type="text/html" data="welcome.html"></object>';
  $("#screenObject").hide();
  $("#screenObject").fadeIn("slow");
}
