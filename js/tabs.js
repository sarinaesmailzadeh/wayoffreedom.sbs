jQuery(document).ready(function($){

	$('.wpcmsdev-tabs').each(function(index, element){

		var headings = $( '<div class="headings"></div>' );

		$(this).find('.tab-title').each(function(index, element) {
			var tab_id = 'tab-' + $(this).data('tab-id')
			var text = $(this).html();
			var tab_content = $(this).siblings('.tab-content').html();

			$('<a></a>').attr('href', '#' + tab_id).html( text ).appendTo( headings );
			$(this).parent().hide().attr('id', tab_id).html( tab_content );
		});

		$(element).prepend( headings );

		$(this).find('.headings a').first().addClass('active').parent().siblings().first().show();

		$(this).find('.headings a').click(function(event){
			event.preventDefault();
			var active_tab = $(this).attr('href');
			$(this).addClass('active').siblings().removeClass('active');
			$(this).parent().siblings().hide();
			$(this).parent().siblings(active_tab).show();
		});

	});

});
