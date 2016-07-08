var app = angular.module('shop',['ngRoute']);//en el array inyectamos dependencias

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when("/",{
		templateUrl: "views/home.html",
		controller: "homeManager"
	})
	.when("/products",{
		templateUrl: "views/products.html",
		controller: "furnituresManager"
	})
	.when("/products/category/:category", {
		templateUrl: "views/categoryFilter.html",
		controller: "categoryManager"
	})
	.when("/contact",{
		templateUrl: "views/contact.html",
		controller: "contactManager"
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

app.controller("categoryManager",["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){
	$scope.category = $routeParams.category;

	$http.get("json/furnitures.json").success (function (data){
		$scope.furnitures = data;
	});
}]);

app.controller('homeManager', ['$scope',"Home", function($scope, home){
	home.initializeSlider();
}]);

app.controller("contactManager", ["$scope", function(){
}]);