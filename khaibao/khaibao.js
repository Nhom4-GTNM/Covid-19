var app = angular.module("myApp", ["ngRoute"]);
app.controller("back", ($scope) => {
  $scope.home = function () {
    window.history.back();
  };
});
