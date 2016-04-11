'use strict'

app.controller('HomeController', function($scope, $rootScope, $location, $timeout, Util, Auth, BetaSerie) {
	
    $scope.loading = true;
    $rootScope.displaySearch = false;
	var getList = function() {
	    $scope.loading = true;
	    $rootScope.displaySearch = false;
		var promise = BetaSerie.getList();
		promise.then(function(shows) {
			$scope.shows = shows;
			$scope.loading = false;
			$rootScope.displaySearch = true;
		}, function(reason) {
			Util.makeAToast(reason);
		});
	};
	
	$scope.watched = function (id) {
	    var p = BetaSerie.watched(id);
		p.then(function(result) {
		    $scope.loading = true;
		    $rootScope.displaySearch = false;
			$timeout(function() {
			    getList();
			}, 3000);
		}, function(reason) {
		    Util.makeAToast(reason);
		});
	}

	getList();

	Util.activateNavBar('.button-collapse');

});