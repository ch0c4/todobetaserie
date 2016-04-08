'use strict'

app.factory('Util', function() {
	var Util = {};
	
	Util.makeAToast = function(msg) {
		$(function() {

			Materialize.toast(msg, 4000);

		});
	};

	return Util;
})