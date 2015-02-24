var loginApp = angular.module('loginApp');
loginApp.controller('homeCtrl',['User','Login','$scope',function(User,Login,$scope){
	
	User.find({'id':1},{},function(data){
		if(data.success.success=="yes"){
			$scope.user = data.user;
		}
	});
	
	$scope.logout = function(){
		Login.destroy({'id':1},{},function(data){
			$scope.user = null;
		});
	};
	
}]);