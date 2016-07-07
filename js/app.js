var app = angular.module('shop',['ngRoute']);//en el array inyectamos dependencias

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

app.factory("Home", function(){
	return{
		initializeSlider: function(){
			$('.slider').slider({full_width: true});
		}	
	}
});

app.controller('furnituresManager',['$scope','$http', function($scope,$http){

	$http.get("json/furnitures.json").success (function (data){
		$scope.furnitures = data;
	});
}]);

app.controller('homeManager', ['$scope',"Home", function($scope, home){
	home.initializeSlider();
}]);