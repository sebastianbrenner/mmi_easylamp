screen = {
  aInternal: "menu",
  aListener: function(val) {},
  set a(val) {
    this.aInternal = val;
    this.aListener(val);
  },
  get a() {
    return this.aInternal;
  },
  registerListener: function(listener) {
    this.aListener = listener;
  }
};

screen.registerListener(function(val) {
  showScreen(val);
});

window.addEventListener(
  "message",
  function(event) {
    if (event.origin === "http://localhost/") {
      alert("Received message: " + event.data.message);
    } else {
      alert("Origin not allowed!");
    }
  },
  false
);

function loadScreen() {
  document.getElementById("screen").innerHTML =
    '<object type="text/html" data="welcome.html"></object>';
}

async function loadWelcomeScreen() {
  document.getElementById("screen").innerHTML =
    '<iframe id="screenFrame" class="screenFrame" src="welcome.html"></iframe>';
  $("#screenFrame").hide();
  $("#screenFrame").fadeIn("slow");
  await sleep(4000);
  clearScreen();
  await sleep(1000);
  showMenu();
}

function clearScreen() {
  document.getElementById("screen").innerHTML = "";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function showMenu() {
  document.getElementById("screen").innerHTML =
    '<iframe id="screenFrame" name="screenFrame" class="screenFrame" src="menu.html"></iframe>';
}

function showFehler() {
  screen = "fehler";
}

function showScreen(screenName) {
  alert(window.parent);
  /*if (screenName == "empty") {
    parent.getElementById("screen").innerHTML = "";
  } else {
    parent.getElementById("window.screen").innerHTML =
      '<iframe id="screenFrame" class="screenFrame" src="' +
      screenName +
      '.html"></iframe>';
  }*/
}
