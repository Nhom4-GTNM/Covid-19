//you can write action in here
const { ipcRenderer, ipcMain } = require("electron");

window.onload = function () {
  const Login = document.getElementById("btn");
  const phone = document.getElementById("phone");
  const password = document.getElementById("pass");

  Login.onclick = function () {
    let obj = { phone: phone.value, pwd: password.value };
    ipcRenderer.send("account", obj);
  };
};
