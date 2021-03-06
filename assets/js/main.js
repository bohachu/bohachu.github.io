$(function() {
	
	// Cache the Window object
	var $window = $(window);
    //var pos = $("p").position();
    //var yStartPos = ;
	
	// Parallax Backgrounds
	// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641
	
	$('div[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
		
		$(window).scroll(function() {
		
			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!								
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			
			// Put together our final background position
			var coords = '50% '+ yPos + 'px';
			
			// Move the background
			$bgobj.css({ backgroundPosition: coords });
			
		}); // end window scroll
	});
    
    setTopBannerHeight();
	
});

$(window).resize(function() {

    setTopBannerHeight();

});

function setTopBannerHeight() {
    $(".top-banner").css("height", window.innerHeight + "px");
}

