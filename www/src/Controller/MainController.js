'use strict'

app.controller('MainController', function ($scope, $rootScope, $location, Search) {

    

    $scope.queryChange = function () {
        if ($scope.searchQuery === "") {
            return;
        }
        if ($location.path() !== '/search') {
            $location.path('/search');
        }
        Search.setSearch($scope.searchQuery);
    }
});