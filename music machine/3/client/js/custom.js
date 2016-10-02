$(document).ready(function() {

	// Holds the footer at the bottom of the page if there isn't enough content
    var height_diff = $(window).height() - $('body').height();
    console.log(height_diff);
    if ( height_diff > 0 ) {
        $('footer').css('margin-top', height_diff);
    } else {
    	 $('footer').css('margin-top', 10);
    }
});