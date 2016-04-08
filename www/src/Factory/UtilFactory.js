'use strict'

app.factory('Util', function() {
	var Util = {};
	
	Util.makeAToast = function(msg) {
		$(function() {

			Materialize.toast(msg, 4000);

		});
	};

	Util.activateNavBar = function (elmName) {
	    $(function () {
	        $(elmName).sideNav();
	    });
	}

	return Util;
})