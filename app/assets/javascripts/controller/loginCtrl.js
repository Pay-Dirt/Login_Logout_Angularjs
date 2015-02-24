var loginApp = angular.module('loginApp');
loginApp.controller('loginCtrl',['$scope','Login','$location',function($scope,Login,$location){
	$scope.loggedIn = false;
	$scope.submit = function(){
		Login.create({},$scope.session,function(data){
			if(data.success.success == "yes"){
				console.log("Login Successful");
				$scope.loggedIn = true;
				$scope.notice = data.success.message;
			}
			else{session={};console.log("Login Failed!");alert("Login Failed!");$scope.session = {};}
		},function(error){console.log("Request Failed!");});
	};
}]);