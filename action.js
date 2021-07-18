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
  const search = document.getElementById("search");
  const add = document.getElementById("add");

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
  search.onclick = function () {
    ipcRenderer.send("search", "search page");
    ipcRenderer.on("patient", (event, data) => {
      window.localStorage.setItem("patient", data);
    });
  };
  add.onclick = function () {
    ipcRenderer.send("add", "add page");
    ipcRenderer.on("data", (event, data) => {
      window.localStorage.setItem("add", data);
    });
  };
};
