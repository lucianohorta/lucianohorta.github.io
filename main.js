$(document).ready(function() {
  
 
  // Click scroll to next div #:
  
  $(".downArrow").on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 1000, function(){
      window.location.hash = this.hash;
    });

  });
 
  
  // scroll indicator:
  
  $(window).on('scroll', function() {

    var docHeight = $(document).height(),
        winHeight = $(window).height();

    var viewport = docHeight - winHeight,
        positionY = $(window).scrollTop();

    var indicator = ( positionY / (viewport)) * 100;

    $('.scroll-bar').css('width', indicator + '%');
  });

    
// click toTop button goes up!
  
$("#toTop").click(function () {    
   $("html, body").animate({scrollTop: 0}, 1000);
});
  
    
});
  
  
     