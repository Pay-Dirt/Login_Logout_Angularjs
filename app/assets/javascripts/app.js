var loginApp = angular.module('loginApp',['ngRoute','pg-resource']);

loginApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'templates/home',
			controller: 'homeCtrl'
		})
		.when('/sign_up',{
			templateUrl: 'templates/sign_up',
			controller: 'signupCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

loginApp.factory('User',['Resource',function(Resource){
	return Resource.create('/users/:id');
}]);