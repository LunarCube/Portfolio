/* This is where my Js goes*/

$(document).ready(function(){

	var $info = $('#info');

	enquire.register("screen and (max-width: 900px)", {
	    match: function() {
	        $info.addClass('quick-nav-2');
	    },

	    unmatch: function() {
	        $info.removeClass('quick-nav-2');
	    }
	}).listen();

});