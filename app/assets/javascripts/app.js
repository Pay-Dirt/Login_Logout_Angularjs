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
		.when('/login',{
			templateUrl: 'templates/login',
			controller: 'loginCtrl'
		})
		.when('users/:id',{
			templateUrl: 'templates/profile',
			controller: 'profileCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

loginApp.factory('User',['Resource',function(Resource){
	return Resource.create('/users/:id');
}]);

loginApp.factory('Login',['Resource',function(Resource){
	return Resource.create('/sessions/:id');
}]);
