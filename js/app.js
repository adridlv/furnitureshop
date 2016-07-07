var app = angular.module('shop',[]);//en el array inyectamos dependencias

app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/",{
        templateUrl: "views/home.html",
        controller: "homeManager"
    })
    .otherwise({
        redirectTo: "/"
    })
}]);

app.controller('furnituresManager',['$scope','$http', function($scope,$http){
    
    $http.get("json/furnitures.json").success (function (data){
        $scope.furnitures = data;
    });
}]);

app.controller('homeManager', ['$scope', function($scope){


}]);