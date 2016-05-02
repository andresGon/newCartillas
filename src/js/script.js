$(document).ready(function() {
	// var openMenu = 0;
	// $('.--menu').click(function(event) {
	// 	openMenu = 1;
	// 	console.log(openMenu);
	// 	if(openMenu ==1){
	// 		$('.mainMenu').css('display', 'block').addClass('animated slideInDown');
	// 		$(this).addClass('openMenu')
	// 	}
	// 	else{
	// 		$('.mainMenu').css('display', 'none').removeClass('animated slideInDown');
	// 		$(this).removeClass('openMenu');
	// 	}
	//
	// });


	$('.--menu').click(function() {
		  var clicks = $(this).data('clicks');
		  if (clicks) {


			$('.mainMenu').removeClass('slideInDown').addClass('class_name');
     	     		$(this).removeClass('openMenu');
		  } else {
			  $('.mainMenu').css('display', 'block').addClass('animated slideInDown');
       	     		$(this).addClass('openMenu')
		  }
		  $(this).data("clicks", !clicks);
	});

});
