var loginApp = angular.module('loginApp');
loginApp.controller('homeCtrl',['User','$scope',function(User,$scope){
	User.find({'id':1},{},function(data){
		$scope.user = data;
	});
}]);