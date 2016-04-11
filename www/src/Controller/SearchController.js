'use strict'

app.controller('SearchController', function ($scope, Search) {

    $scope.$on('searchData', function (event, data) {
        console.log(data);
    });

});