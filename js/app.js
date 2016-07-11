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
	.when("/products/id/:id",{
		templateUrl: "views/product.html",
		controller: "productManager"
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

app.controller("productManager",["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){
	$scope.id = $routeParams.id;

	$http.get("json/furnitures.json").success (function (data){
		$scope.furnitures = data;
	});
}]);

app.controller('homeManager', ['$scope',"Home", function($scope, home){
	home.initializeSlider();
	$scope.eventoSofa = "images/sofas/i1.jpg";
	$scope.eventoBed = "images/bed/i1.jpg";
	$scope.eventoTable = "images/table/i1.jpg";
	$scope.eventoChair = "images/chair/i1.jpg";


	$scope.mouseOnSofa = function() {
		$scope.eventoSofa = "images/sofas/i2.jpg";
	}
	$scope.mouseOnBed = function() {
		$scope.eventoBed = "images/bed/i2.jpg";
	}
	$scope.mouseOnTable = function() {
		$scope.eventoTable = "images/table/i2.jpg";
	}
	$scope.mouseOnChair = function() {
		$scope.eventoChair = "images/chair/i2.jpg";
	}


	$scope.mouseOffSofa = function() {
		$scope.eventoSofa = "images/sofas/i1.jpg";
	}
	$scope.mouseOffBed = function() {
		$scope.eventoBed = "images/bed/i1.jpg";
	}
	$scope.mouseOffTable = function() {
		$scope.eventoTable = "images/table/i1.jpg";
	}
	$scope.mouseOffChair = function() {
		$scope.eventoChair = "images/chair/i1.jpg";
	}

}]);

app.controller("contactManager", ["$scope", function(){
}]);