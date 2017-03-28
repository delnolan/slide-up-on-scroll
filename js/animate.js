jQuery(window).scroll(function(){
	popIn();
});
jQuery(document).ready(function(){
	popIn();
});
function popIn(){
	var scroll_height = jQuery(window).scrollTop();
	var screen_height = jQuery(window).height();
	console.log(screen_height);
	jQuery('.animate').each(function(){	
		var el_height = jQuery(this).height();
		var el_position = jQuery(this).offset().top;
		var scroll_el = scroll_height + screen_height - el_height + 200;
		if(scroll_el > el_position){
			jQuery(this).children('.animated').addClass('animate-this');
		}else{
			jQuery(this).children('.animated').removeClass('animate-this');
		}
	});
};