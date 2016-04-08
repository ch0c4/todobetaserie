'use strict'

app.factory('Auth', function($http, $q, Util) {

	var user = false;
	var url = 'https://api.betaseries.com/members/auth';

	return {
		login : function(d) {

			var urlRequest = url + '?login=' + d.login + '&password=' + md5(d.password) + '&key=' + Util.getKey();
			return $q(function(resolve, reject) {
				$http.post(urlRequest).then(function(data) {
					var result = {
						token : data.data.token,
						id : data.data.user.id,
						login : data.data.user.login
					};
					resolve(result);
				
				}, function (data) {
					var message = data.statusText + ' : ' + data.data.errors[0].text;
					reject(message);
				});
			});
		},
		setUser : function(aUser) {
			user = aUser;
		},
		getUser : function() {
			return user;
		},
		isLoggedIn : function() {
			return (user) ? user : false;
		}
	}
});