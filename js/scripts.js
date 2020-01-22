async function loadWelcomeScreen() {
  showScreen("welcome");
  $("#emptyScreenFrame").hide();
  $("#emptyScreenFrame").fadeIn("slow");
  await sleep(4000);
  showScreen("empty");
  await sleep(1000);
  showScreen("menu");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function showScreen(screenName) {
  if (screenName == "welcome") {
    $("#emptyScreenFrame").attr("src", screenName + ".html");
    $("#emptyScreen").show();
  } else if (screenName == "empty") {
    $("#emptyScreen").show();
    $("#emptyScreenFrame").attr("src", "");
  } else {
    $("#screenFrame").attr("src", screenName + ".html");
    $("#emptyScreen").hide();
  }
}

function showScreenFrame(screenName) {
  location.href = screenName + ".html";
}

function debug() {
  console.log("click");
  location.href = "fehler.html";
}
