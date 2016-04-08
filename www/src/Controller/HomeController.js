'use strict'

app.controller('HomeController', function($scope, $route, $timeout, Util, Auth, BetaSerie) {
	
	$scope.loading = true;
	var getList = function() {
		$scope.loading = true;
		var promise = BetaSerie.getList();
		promise.then(function(shows) {
			$scope.shows = shows;
			$scope.loading = false;
		}, function(reason) {
			Util.makeAToast(reason);
		});
	};
	
	$scope.watched = function(id) {
		var p = BetaSerie.watched(id);
		p.then(function(result) {
			$scope.loading = true;
			$timeout(function() {
				getList();
			}, 3000);
		}, function(reason) {
			Util.makeAToast(reason);
		});

	}

	getList();

});