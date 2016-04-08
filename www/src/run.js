'use strict'

app.run(function($rootScope, $location, Auth) {

	$rootScope.$on('$routeChangeStart', function(event) {

		if(!Auth.isLoggedIn()) {
			$location.path('/login');
		} else {
		    $location.path($location.path());
		}

	});

});