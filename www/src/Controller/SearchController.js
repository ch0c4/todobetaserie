'use strict'

app.controller('SearchController', function ($scope, Search) {

    $scope.$watch(function () {
        return Search.data;
    }, function (newVal, oldVal) {
        if (typeof newVal !== 'undefined') {
            console.log(Search.data);
        }
    });

});