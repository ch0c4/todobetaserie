'use strict'

app.factory('Search', function ($http, $q, BetaSerie) {

    var Search = {};

    Search.setSearch = function (search) {
        var promise = BetaSerie.doSearch(search);
        promise.then(function (result) {
            for (var id in result.shows) {
                var show = result.shows[id];
                var d = {
                    id: show.id,
                    title: show.title,
                    description: show.description,
                    in_account: show.in_account,
                    image: show.images.box
                };
                Search.data.push(d);
            }
        }, function (data) {
            console.log(data);
        });
    },

    Search.data = [];

    return Search;

});