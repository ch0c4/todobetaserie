'use strict'

app.run(function($rootScope, $location, Auth) {
    $rootScope.displaySearch = false;
	$rootScope.$on('$routeChangeStart', function(event) {
        
	    if (!Auth.isLoggedIn()) {
	        $rootScope.displaySearch = false;
			$location.path('/login');
	    } else {
	        $rootScope.displaySearch = true;
		    $location.path($location.path());
		}

	});

});