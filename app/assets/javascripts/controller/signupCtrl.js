var loginApp = angular.module('loginApp');
loginApp.controller('signupCtrl',['$scope','User','$location',function($scope,User,$location){
	$scope.isSignedUp = false;
	$scope.submit = function(){
		console.log("Clicked");
		User.create({},$scope.newUser,function(data){
			console.log(data);
			if(data.email==$scope.newUser.email){$scope.isSignedUp = true;$location.path('/login');}
			else{$scope.errors = data;}
		});
	};	
}]);