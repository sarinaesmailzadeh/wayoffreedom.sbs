jQuery(document).ready(function($){

	$('.wpcmsdev-accordion').each(function(index, element){
		$(this).find('.accordion-item-content').hide().first().show().parent().addClass('active');
	});

	$('.wpcmsdev-accordion .accordion-item-title a').click(function(event){
		event.preventDefault();

		if ( ! $(this).parents('.accordion-item').hasClass('active') ) {

			// Set active class
			$(this).parents('.accordion-item').addClass('active').siblings().removeClass('active');

			// Hide others content
			$(this).parents('.accordion-item').siblings().children('.accordion-item-content').slideUp('fast');

			// Show own content
			$(this).parent().siblings('.accordion-item-content').slideDown('fast');

		}
	});
});
