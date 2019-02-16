var lang = {
  "html": "100%",
  "css": "90%",
  "javascript": "70%",
  "php": "55%",
  "angular": "65%"
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;
  
  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);
  
  multiply++;

});

$(function(){
	
	
$('.blog_slide').slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: true,
        autoplay: true,
        nextArrow: ".nxtbtn",
        prevArrow: ".prevbtn",
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2
                }
        },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
        }
      ]
    });
	
	
});