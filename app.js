
/**
 * Created by lenovo on 2017/3/2.
 */
angular.module('hello',['ngRoute','mainApp'])
	.config(['$routeProvider',function($routeProvider) {
		$routeProvider.otherwise({redirectTo:'/hello'});
	}]);
