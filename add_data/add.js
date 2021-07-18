var fs = require("fs");
var app = angular.module("myApp", ["ngRoute"]);
app.controller("back", ($scope) => {
  $scope.home = function () {
    window.history.back();
  };
});
app.controller("push", ($scope) => {
  $scope.msg = "";
  $scope.hoten = "";
  $scope.ngaysinh = "";
  $scope.sex = "";
  $scope.diachi = "";
  $scope.ngaytiem = "";
  $scope.tenvacin = "";
  $scope.noitiem = "";
  $scope.tinhtrang = "";
  var data = window.localStorage.getItem("add");
  json = JSON.parse(data);
  $scope.add = function () {
    if (
      $scope.hoten == "" ||
      $scope.ngaysinh == "" ||
      $scope.sex == "" ||
      $scope.diachi == "" ||
      $scope.ngaytiem == "" ||
      $scope.tenvacin == "" ||
      $scope.noitiem == "" ||
      $scope.tinhtrang == ""
    ) {
      $scope.msg = " Thêm dữ liệu thất phải, vui lòng kiểm tra lại";
    } else {
      $scope.msg = " Dữ liệu được thêm thành công !!!";
      (obj = {
        id: Math.floor(Math.random() * 10000),
        hoten: $scope.hoten,
        ngaysinh: $scope.ngaysinh,
        gioitinh: $scope.sex,
        diachi: $scope.diachi,
        tiem: [{ lan: 1, ngaytiem: $scope.ngaytiem }],
        tenVaccine: $scope.tenvacin,
        noitiem: $scope.noitiem,
        tinhtrang: $scope.tinhtrang,
      }),
        json.push(obj);
      const content = JSON.stringify(json);
      fs.writeFile("./tracuu/demo.json", content, "utf8", function (err) {
        if (err) {
          return console.log(err);
        }
      });
      $scope.hoten = "";
      $scope.ngaysinh = "";
      $scope.sex = "";
      $scope.diachi = "";
      $scope.ngaytiem = "";
      $scope.tenvacin = "";
      $scope.noitiem = "";
      $scope.tinhtrang = "";
    }
  };
});
