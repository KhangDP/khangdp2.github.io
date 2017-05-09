jQuery(document).ready(function ($){
	$(window).scroll(function(){
		var s = $(window).scrollTop();
		var l = $('.experience').offset().top;
		var sub = l-s;
		if(sub<220){
			$('.experience_01').css('animation','experience01 1s forwards');
			$('.experience_to').css({'animation' : 'experienceto 1s forwards','animation-delay' : '1s'});
			$('.experience_02').css({'animation' : 'experienceto 1s forwards','animation-delay' : '2s'});
		}
	});
});