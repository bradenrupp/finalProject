$(document).ready(function(){
	alert("Welcome");

	var scroll_start = 0;
	var startchange = $('#startchange');
	var offset = startchange.offset();
	$(document).scroll(function() {
		scroll_start = $(this).scrollTop();
		if(scroll_start > offset.top) {
			$('#navbar').css('background-color','#f0f0f0');
			$('#navbar').css('color','black');
			$('#navbar').css('opacity','.9');

		}
		else {
			$('#navbar').css('background-color','transparent');
			$('#navbar').css('color','white');
			$('#navbar').css('opacity','1');


		}
	});
});