//you can write action in here
const {ipcRenderer} = require('electron')



window.onload = function() { 
    const btnLogin = document.getElementById('btnLogin')
    const phonenumber = document.getElementById('phone')
    const pwd = document.getElementById('pwd')
      
    btnLogin.onclick = function(){
        let obj = {phone: phonenumber.value, pwd: pwd.value}
        ipcRenderer.send('account', obj)
    }
}