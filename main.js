const { app, BrowserWindow, ipcMain, Notification} = require("electron");
const path = require('path');
let data = require('./db')
let users = require('./db')
let win;
let winlogin;
function Window() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
     nodeIntegration: true,
     contextIsolation:true,
     devTools:false,
      preload:path.join(__dirname, 'home.js')
      
    }
  });

  win.loadFile("home.html");
}

function loginWindow () {
  winlogin = new BrowserWindow({
   width: 800,
   height: 600,
   webPreferences: {
    nodeIntegration: true,
    contextIsolation:true,
    devTools:false,
     preload:path.join(__dirname, 'index.js')
     
   }
 })

 winlogin.loadFile('index.html')
}


app.whenReady().then(loginWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    Window()
  }
})

ipcMain.on('account', (event, obj) => {
  validateLogin(obj)
})

function validateLogin(obj) {
  stt = false
  for(user of users){
    if(obj.phone == user.phone && obj.pwd == user.pwd) {
      stt = true
      Window()
      win.show()
      winlogin.close()
      new Notification({
        title:"Login",
        body: 'Đăng nhập thành công'
      }).show()
      break;
    }else{
      stt = false
  }
  }
  if(stt == false){
    new Notification({
      title:"Login",
      body: 'Số điện thoại hoặc mật khẩu không đúng !'
    }).show()
  }
}

