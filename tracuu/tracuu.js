var app = angular.module("myApp", ["ngRoute"]);
app.controller("back", ($scope) => {
  $scope.home = function () {
    window.history.back();
  };
});
app.controller("listCtrl", ($scope) => {
  $scope.list = [
    {
      id: 1,
      hoten: "Nguyễn Thị Sang",
      ngaysinh: "02/05/1993",
      gioitinh: "Nữ",
      diachi: "233 Lý Thường Kiệt, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
      ],
      tenVaccine: "Vaccine Việt Nam",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Âm tính",
    },
    {
      id: 2,
      hoten: "Lê Văn Lết",
      ngaysinh: "02/08/1983",
      gioitinh: "Nam",
      diachi: "255 Lý Thường Kiệt, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
      ],
      tenVaccine: "Vaccine Sputnik V",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Âm tính",
    },
    {
      id: 3,
      hoten: "Lý Thị Liễu",
      ngaysinh: "08/05/1995",
      gioitinh: "Nữ",
      diachi: "223 Trường Chinh, HCM",
      tiem: [{ lan: 1, ngaytiem: "05/06/2021" }],
      tenVaccine: "Vaccine Việt Nam",
      noitiem: "Bệnh viện Nhiệt Đới",
      tinhtrang: "Dương tính",
    },
    {
      id: 4,
      hoten: "Trần Văn Tèo",
      ngaysinh: "02/07/1993",
      gioitinh: "Nam",
      diachi: "13 Lý Thường Kiệt, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
        { lan: 2, ngaytiem: "11/07/2021" },
      ],
      tenVaccine: "Vaccine Sinopharm",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Dương tính",
    },
    {
      id: 5,
      hoten: "Nguyễn Thị Vy",
      ngaysinh: "02/07/1994",
      gioitinh: "Nữ",
      diachi: "233 Phạm Ngũ Lão, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
      ],
      tenVaccine: "Vaccine Việt Nam",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Dương tính",
    },
    {
      id: 6,
      hoten: "Nguyễn Thị Dương",
      ngaysinh: "02/05/1983",
      gioitinh: "Nữ",
      diachi: "233 Âu Cơ, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
      ],
      tenVaccine: "Vaccine Việt Nam",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Âm tính",
    },
    {
      id: 7,
      hoten: "Trần Văn Tính",
      ngaysinh: "02/05/1995",
      gioitinh: "Nam",
      diachi: "56 Lý Thường Kiệt, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
      ],
      tenVaccine: "Vaccine Việt Nam",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Âm tính",
    },
    {
      id: 8,
      hoten: "Lê Văn Đói",
      ngaysinh: "02/05/1989",
      gioitinh: "Nam",
      diachi: "123 Hòa Bình, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
      ],
      tenVaccine: "Vaccine Việt Nam",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Âm tính",
    },
    {
      id: 9,
      hoten: "Lê Thị Cô Vy",
      ngaysinh: "02/08/1993",
      gioitinh: "Nữ",
      diachi: "34 Lạc Long Quân, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
      ],
      tenVaccine: "Vaccine Việt Nam",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Dương tính",
    },
    {
      id: 10,
      hoten: "Nguyễn Thị Phương",
      ngaysinh: "02/07/1983",
      gioitinh: "Nữ",
      diachi: "27 Lý Thường Kiệt, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
      ],
      tenVaccine: "Vaccine Việt Nam",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Âm tính",
    },
    {
      id: 11,
      hoten: "Thạch Sanh",
      ngaysinh: "02/05/1985",
      gioitinh: "Nam",
      diachi: "23 Hùng Vương, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
      ],
      tenVaccine: "Vaccine Việt Nam",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Dương tính",
    },
    {
      id: 12,
      hoten: "Lý Thông",
      ngaysinh: "02/08/1983",
      gioitinh: "Nam",
      diachi: "233 Hùng Vương, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
      ],
      tenVaccine: "Vaccine Việt Nam",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Âm tính",
    },
    {
      id: 13,
      hoten: "Trần Văn Quá",
      ngaysinh: "02/05/1997",
      gioitinh: "Nam",
      diachi: "27 Kinh Dương Vương, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
      ],
      tenVaccine: "Vaccine Sinopharm",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Âm tính",
    },
    {
      id: 14,
      hoten: "Nguyễn Thị Hoang Dung",
      ngaysinh: "02/05/1973",
      gioitinh: "Nữ",
      diachi: "88 Lý Thường Kiệt, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
      ],
      tenVaccine: "Vaccine Việt Nam",
      noitiem: "Bệnh viện Bạch Mai",
      tinhtrang: "Âm tính",
    },
    {
      id: 15,
      hoten: "Quách Tĩnh",
      ngaysinh: "02/11/1991",
      gioitinh: "Nam",
      diachi: "29 Âu Cơ, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
      ],
      tenVaccine: "Vaccine Việt Nam",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Âm tính",
    },
    {
      id: 16,
      hoten: "Âu Dương Phong",
      ngaysinh: "07/11/1981",
      gioitinh: "Nam",
      diachi: "899 Âu Cơ, HCM",
      tiem: [{ lan: 1, ngaytiem: "05/06/2021" }],
      tenVaccine: "Vaccine Việt Nam",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Âm tính",
    },
    {
      id: 17,
      hoten: "Trần Dần",
      ngaysinh: "09/11/1961",
      gioitinh: "Nam",
      diachi: "333 Trường Chinh, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
      ],
      tenVaccine: "Vaccine Việt Nam",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Âm tính",
    },
    {
      id: 18,
      hoten: "Lê Thị Núi",
      ngaysinh: "02/01/1992",
      gioitinh: "Nữ",
      diachi: "36 Âu Cơ, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
      ],
      tenVaccine: "Vaccine Sputnik V.",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Âm tính",
    },
    {
      id: 19,
      hoten: "Lê Thị Cơ",
      ngaysinh: "02/12/1992",
      gioitinh: "Nữ",
      diachi: "65 Âu Cơ, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
      ],
      tenVaccine: "Vaccine Sputnik V.",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Dương tính",
    },
    {
      id: 20,
      hoten: "Mệt Văn Mỏi",
      ngaysinh: "07/11/1991",
      gioitinh: "Nam",
      diachi: "199 Âu Cơ, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
      ],
      tenVaccine: "Vaccine Việt Nam",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Âm tính",
    },
    {
      id: 21,
      hoten: "Trần Văn Đuối",
      ngaysinh: "02/12/1997",
      gioitinh: "Nam",
      diachi: "29 Hồng Bàng, HCM",
      tiem: [
        { lan: 1, ngaytiem: "05/06/2021" },
        { lan: 2, ngaytiem: "05/07/2021" },
      ],
      tenVaccine: "Vaccine Việt Nam",
      noitiem: "Bệnh viện Chợ Rẫy",
      tinhtrang: "Âm tính",
    },
  ];

  $scope.tenVaccine = () => {
    tenVaccine = ["Vaccine Việt Nam"];
    $scope.list.forEach((data) => {
      if (tenVaccine.includes(data.tenVaccine) == false) {
        tenVaccine.push(data.tenVaccine);
      }
    });
    return tenVaccine;
  };

  $scope.ketqua = () => {
    ketqua = ["Âm tính"];
    $scope.list.forEach((data) => {
      if (ketqua.includes(data.tinhtrang) == false) {
        ketqua.push(data.tinhtrang);
      }
    });
    return ketqua;
  };
});
