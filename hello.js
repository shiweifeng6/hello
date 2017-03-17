
/**
 *
 * Created by lenovo on 2017/3/2.
 */
(function(angular) {
	var app = angular.module('mainApp',['ngRoute']);
	app.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/hello',{
			templateUrl:'view.html',
			controller:'helloController'
		});
	}]);
	app.controller('helloController',['$scope',function($scope) {

	}]);
})(angular);