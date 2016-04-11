'use strict'

app.factory('Key', function () {

    var Key = {};
    var apiKey = "c0a7b7f6d3e3";

    Key.getKey = function () {
        return apiKey;
    }

    return Key;
});