'use strict'

app.factory('Key', function () {

    var Key = {};
    var apiKey = '******';

    Key.getKey = function () {
        return apiKey;
    }

    return Key;



});