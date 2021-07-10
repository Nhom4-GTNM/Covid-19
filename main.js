const { app, BrowserWindow } = require("electron");
var win;
function Window() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");

  win.on("close", () => {
    app.quit();
  });
}

app.on("ready", Window);
