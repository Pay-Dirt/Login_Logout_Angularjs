var loginApp = angular.module('loginApp');
loginApp.controller('loginCtrl',['$scope','Login','$location',function($scope,Login,$location){
	$scope.submit = function(){
		Login.create({},$scope.session,function(data){
			if(data.email == $scope.session.email){console.log("Login Successful");}
			else{session={};console.log("Login Failed!");}
		},function(error){console.log("Request Failed!");});
	};
}]);