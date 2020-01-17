$(document).ready(function() {
 
        // Click scroll to next div #:
        
        $(".downArrow").on("click", function(e){
          e.preventDefault();

          $('html, body').animate({ 
            scrollTop: $(this.hash).offset().top }, 1000, function(){
              window.location.hash = this.hash;
            });

        });

        // TODO: clicar no botao .prev-section e retornar para div pai anterior
        // $('.prev-section').click(function(e){
        //   e.preventDefault();
        //   var $this = $(this),
        //       $prev = $this.parent().prev();
      
        //   $prev.scrollTo(400, 'linear');
        // });

        // --------------------------------------------

        // scroll indicator:

        var winHeight = $('.content').height(), 
            docHeight = $(document).height(),
            progressBar = $('progress'),
            max, value;

        /* Set the max scrollable area */
        max = docHeight - winHeight;

        progressBar.attr('max', max);


        $(document).on('scroll', function(){
          value = $(window).scrollTop();
          progressBar.attr('value', value);
        });


      // --------------------------------------------
          
      // click toTop button goes up!
        
      $("#toTop").click(function () {    
        $("html, body").animate({scrollTop: 0}, 1000);
      });
  
    
});
  
  
     