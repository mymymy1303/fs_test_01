$(function () {
	//THE DOM IS READY

	// ------------------------------------
	//-----------WELCOME SLIDER------------
	//-------------------------------------
	$('#welcome_slider').owlCarousel({
		loop: true,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		dots: false,
		items: 1
	})


	// ------------------------------------
	//---------FEEDBACK SLIDER----------
	//----------------------------------
	$('#feedback_slider').owlCarousel({
		loop: false,
		items: 1,
		dots: true,
		dotsEach: 1,
		margin: 0
	})

});
