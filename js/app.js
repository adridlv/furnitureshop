var app = angular.module('shop',[]);//en el array inyectamos dependencias
app.controller('furnituresManager',['$scope','$http', function($scope,$http){
    
    $http.get("json/furnitures.json").success (function (data){
        $scope.furnitures = data;
    });
}]);
