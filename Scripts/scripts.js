//$('a[href^="#"]').on('click', function(event) {
//    var target = $(this.getAttribute('href'));
//    if( target.length ) {
//        event.preventDefault();
//        $('html, body').stop().animate({
//            scrollTop: target.offset().top
//        }, 1000);
//    }
//});

var timeOut;
function scrollToTop() {
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-50);
		timeOut=setTimeout('scrollToTop()',10);
	}
	else clearTimeout(timeOut);
}