var loginApp = angular.module('loginApp');
loginApp.controller('homeCtrl',['User','$scope',function(User,$scope){
	User.find({'id':1},{},function(data){
		console.log(data);
		if(data.success.success=="yes"){
			console.log(data.user.name);
			$scope.user = data.user;
		}
	});
	
}]);