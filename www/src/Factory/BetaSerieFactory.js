'use strict'

app.factory('BetaSerie', function($http, $q, Auth, Util, Key) {

	var BetaSerie = {};
	var key = Key.getKey();

	BetaSerie.getList = function () {
	    var user = Auth.getUser();
		var token = user.token;
		var urlRequest = 'https://api.betaseries.com/episodes/list?token=' + token + '&key=' + key;
		return $q(function(resolve, reject) {
		    $http.get(urlRequest).then(function (data) {
				var shows = data.data.shows;
				var retVals = [];
				for(var id in shows) {
					var show = shows[id];
					var unseen = show.unseen;
					var retVal = {
						idShow : show.id,
						title : show.title,
						idEpisode : unseen[0].id,
						season : unseen[0].season,
						episode : unseen[0].episode,
					}
					retVals.push(retVal);
				}
				resolve(retVals);
			}, function(data) {
				var message = data.statusText + ' : ' + data.data.errors[0].text;
				reject(message);
			});
		})
	};

	BetaSerie.watched = function (id) {
	    var user = Auth.getUser();
	    var token = user.token;
	    var urlRequest = 'https://api.betaseries.com/episodes/watched?id=' + id + '&token=' + token + '&key=' + key;
	    return $q(function (resolve, reject) {
	        $http.post(urlRequest).then(function (data) {
	            resolve(data);
	        }, function (data) {
	            var message = data.statusText + ' : ' + data.data.errors[0].text;
	            reject(message);
	        });
	    });
	};

	BetaSerie.doSearch = function (term) {
	    var user = Auth.getUser();
	    var token = user.token;
	    var urlRequest = 'https://api.betaseries.com/shows/search?title=' + term + '&token=' + token + '&key=' + key;
	    return $q(function (resolve, reject) {
	        $http.get(urlRequest).then(function (data) {
	            resolve(data);
	        }, function (data) {
	            var message = data.statusText + ' : ' + data.data.errors[0].text;
	            reject(message);
	        });
	    });
	}

	return BetaSerie;
});