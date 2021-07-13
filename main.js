const { app, BrowserWindow, ipcMain, webContents } = require("electron");
const path = require("path");
let users = require("./db");

let win;
let winlogin;
function Window() {
  win = new BrowserWindow({
    height: 715,
    width: 1200,
    minWidth: 600,
    minHeight: 200,
    center: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      devTools: true,
      preload: path.join(__dirname, "home.js"),
    },
  });

  win.loadFile("home.html");
}
//open devtools

function loginWindow() {
  winlogin = new BrowserWindow({
    height: 715,
    width: 1200,
    minWidth: 600,
    minHeight: 200,
    center: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      devTools: false,
      //preload: path.join(__dirname, "index.js"),
      preload: path.join(__dirname, "/login/login.js"),
    },
  });

  winlogin.loadFile("./login/login.html");
}
//open devtool for login screen

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
});
ipcMain.on("msg", (event, data) => {
  console.log(data);
});

function validateLogin(obj) {
  stt = false;
  for (user of users) {
    if (obj.phone == user.phone && obj.pwd == user.pwd) {
      stt = true;
      Window();
      win.show();
      winlogin.close();
      break;
    } else {
      stt = false;
    }
  }
  if (stt == false) {
    console.log("login false");
  }
}
