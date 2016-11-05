'use strict'

app.factory('Key', function () {

    var Key = {};
    var apiKey = "azeqsd";

    Key.getKey = function () {
        return apiKey;
    }

    return Key;
});
