	// Text display controller
	angular.module("myApp").controller("sampleCtrl",function($scope){
	$scope.txt="nothing";
	$scope.display=function(){
		return $scope.txt;
	}
	});

	// http request response controller
	angular.module("myApp").controller("httpCtrl",function($scope,$http){
		$http.get("httpRes.txt")
		.then(function(response){
			$scope.welcomeMsg=response.data;
		})
	});

	// Demonstration of Routing concept
	angular.module("myApp").config(function($routeProvider) {
	    $routeProvider
	    .when("/template1", {
	        templateUrl : "./views/template1.html"
	    })
	    .when("/template2", {
	        templateUrl : "./views/template2.html"
	    })
	    .when("/template3", {
	        templateUrl : "./views/template3.html"
	    })
	  
	});