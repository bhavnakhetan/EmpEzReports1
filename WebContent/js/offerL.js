var app = angular.module('formApp', []);
app.controller('formCtrl', function ($scope) {
$scope.fname = "Bhavna ";
$scope.lname = "Khetan";
/* $scope.hireDate = "June 20, 2019"; */
$scope.hireDate = new Date();
$scope.salary="100.00"
});