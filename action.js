var app = angular.module("App", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./home/home.html",
    })
    .when("/profile", {
      templateUrl: "./profile/profile.html",
    });
});
app.controller("user", ($scope, $http) => {
  var user = window.localStorage.getItem("data");
  $scope.inf = JSON.parse(user);
  console.log("length", user.length);
  console.log("demo", JSON.parse(user));
});

//electron
const { ipcRenderer } = require("electron");

window.onload = function () {
  const btn = document.getElementById("user");
  const out = document.getElementById("out");

  btn.onclick = function () {
    ipcRenderer.send("hello", "Profile page");
    ipcRenderer.on("fontend", (event, obj) => {
      console.log(obj.name);
      window.localStorage.setItem("data", JSON.stringify(obj));
    });
  };
  out.onclick = function () {
    var ok = confirm("App will exit, when you click Ok!!!!");
    if (ok == true) {
      ipcRenderer.send("out", "action out");
    } else {
      console.warn("COntinue using app");
    }
  };
};
