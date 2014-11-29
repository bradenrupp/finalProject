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

    function stext() {
        var x = document.getElementById("seeMore1");
        var y = document.getElementById("seeMore4");
        x.style.color = '#f0f0f0';
        x.style.background = '#333';

        y.style.color = '#f0f0f0';
        y.style.background = '#333';
    }

    function htext(td) {
        var x = document.getElementById("seeMore1");
        var y = document.getElementById("seeMore4");
        x.style.color = '#333';
        x.style.background = '#f0f0f0';

        y.style.color = '#333';
        y.style.background = '#f0f0f0';
    }



