var loginApp = angular.module('loginApp');
loginApp.controller('signupCtrl',['$scope','User',function($scope,User){
	$scope.submit = function(){
		console.log("Clicked");
		User.create({},$scope.newUser,function(data){
			console.log(data);
			if(data.email==$scope.newUser.email){}
			else{$scope.errors = data;}
		});
		
	
}]);