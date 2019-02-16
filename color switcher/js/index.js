//MAIN FUNCTION 
$(document).ready(function () {
    // Color Switcher
    $('ul.theme-colors li').click(function () {
        $('.title').css('color', $(this).css('color'));
    });
  
    $('a.themes-btn').click(function () {
        $('.colors').toggleClass('active');
    });
    
    // Light / Dark Switcher
    $('.btn-toggle').click(function() {
          $(this).find('.btn').toggleClass('selected-btn');
    $('section').toggleClass('dark-bg');
    $('.title').toggleClass('dark-title');  
    });
});