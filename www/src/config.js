'use strict'

app.config(function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl : 'src/Template/home.html',
			controller : 'HomeController'
		})
		.when('/home', {
			templateUrl : 'src/Template/home.html',
			controller : 'HomeController'
		})
		.when('/login', {
			templateUrl : 'src/Template/login.html',
			controller : 'LoginController'
		})
		.otherwise({
	       redirectTo: '/login'
	    });

});