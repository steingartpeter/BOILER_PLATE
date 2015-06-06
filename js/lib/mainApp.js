var mainModule = angular.module("boilerPlateApp",[]);

mainModule.controller("hdrCntrlr",["$scope", "$log", function($scope, $log){
    $log.info("Contorller létrehozva...");
    $scope.jmbtrCim = "Alkalmazáscím Angularból...";
}]);