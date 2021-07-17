const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
let users = require("./db");

let win;
let login;
function Window() {
  win = new BrowserWindow({
    height: 715,
    width: 1200,
    minWidth: 600,
    minHeight: 200,
    center: true,
    webPreferences: {
      nodeIntegration: true, // is default value after Electron v5
      contextIsolation: false, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      devTools: true,
    },
  });

  win.loadFile("./main.html");
}
//open devtools

function loginWindow() {
  login = new BrowserWindow({
    height: 715,
    width: 1200,
    minWidth: 600,
    minHeight: 200,
    center: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: false,
      preload: path.join(__dirname, "login/login.js"),
    },
  });

  login.loadFile("./login/login.html");
}
app.whenReady().then(loginWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    Window();
  }
});

ipcMain.on("account", (event, obj) => {
  validateLogin(obj);
  event.reply("fontend", obj);
});

function validateLogin(obj) {
  stt = false;
  for (user of users) {
    if (obj.phone == user.phone && obj.pwd == user.pwd) {
      user.active = true;
      stt = true;
      Window();
      win.show();
      login.close();
      console.log(user);
      //troller

      break;
    } else {
      stt = false;
    }
  }
  if (stt == false) {
    console.log("login false");
  }
}
// send data user
ipcMain.on("hello", (event, obj) => {
  console.log(obj);

  event.reply("fontend", user);
});
ipcMain.on("out", (event, msg) => {
  console.log("Logout", msg);
  app.exit();
});
