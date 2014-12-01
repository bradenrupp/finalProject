$(document).ready(function(){
	var scroll_start = 0;
	var startchange = $('#startchange');
	var offset = startchange.offset();
	$(document).scroll(function() {
		scroll_start = $(this).scrollTop();
		if(scroll_start > offset.top) {
			$('#navbar').css('background-color','#333');
			$('#navbar').css('opacity','.9');
		}
		else {
			$('#navbar').css('background-color','transparent');
			$('#navbar').css('opacity','1');
		}
	});
});





