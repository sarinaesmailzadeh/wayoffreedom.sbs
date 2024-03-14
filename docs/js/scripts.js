/*---------------------------------------------------------------------------------------------
  Skip Link Focus Fix
----------------------------------------------------------------------------------------------*/
( function() {
	var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
	    is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
	    is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

	if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var element = document.getElementById( location.hash.substring( 1 ) );

			if ( element ) {
				if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) )
					element.tabIndex = -1;

				element.focus();
			}
		}, false );
	}
})();


/*---------------------------------------------------------------------------------------------
  Scroll to top
----------------------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
    $(window).scroll(function(){
        if ($(this).scrollTop() < 400) {
            $('.smoothup') .fadeOut();
        } else {
            $('.smoothup') .fadeIn();
        }
    });
    $('.smoothup').on('click', function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
        });
});