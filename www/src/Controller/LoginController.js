'use strict'

app.controller('LoginController', function($scope, $location, Auth, Util) {

	$scope.login = function () {

	    /*var user = {
	    	login : $scope.pseudo,
	    	password : $scope.password
	    };*/

	    var user = {
	        login: "ch0c4",
	        password: 'azeqsd'
	    };

	    var promise = Auth.login(user);
	    promise.then(function (user) {
	    	Auth.setUser(user);
	    	$location.path('/home');
	    }, function(reason) {
	    	Util.makeAToast(reason);
	    });
  	};
});