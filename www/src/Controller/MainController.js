'use strict'

app.controller('MainController', function ($scope, $location, Search) {
    $scope.isLogin = function () {
        if ($location.path() === '/login') {
            return true;
        }
        return false;
    }

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