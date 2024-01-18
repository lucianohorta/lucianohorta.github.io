$(document).ready(function(){

    // SLICK SLIDER LIB
    var $slider = $('.employment-slider');
    $slider.slick({
        infinite: false, 
        slidesToShow: 4, 
        responsive: [
            {
                breakpoint: 768, // less than 768px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3 
                }
            },
            {
                breakpoint: 650, // less than 480px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2 
                }
            },
            {
                breakpoint: 430, // less than 430px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1 
                }
            }
        ],
        slidesToScroll: 4, 
        arrows: true, 
        dots: false, 
        variableWidth: false,
        prevArrow: '<button class="custom-prev-arrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="custom-next-arrow"><i class="fas fa-chevron-right"></i></button>'
    });

    // ANIMATE ON SCROLL LIB
    AOS.init();

    // TYPED LIB
    var options = {
        stringsElement: '#typed-strings',
        typeSpeed: 40,
        backSpeed: 40, 
        startDelay: 1200,
        backDelay: 1200,
        loop: false,
        showCursor: true,
        autoInsertCss: true
    };
    var typed = new Typed("#typed", options);

    // GO TO TOP BTN
    $("#toTop").click(function () {    
        $("html, body").animate({scrollTop: 0}, 1000);
    });

    //GO TOP EACH NEXT SECTION
    $(".scroll-down-link").on("click", function (e) {
        e.preventDefault();

        var $nextSection = $(this).closest("section").next("section");

        if ($nextSection.length) {
            var scrollTop = $nextSection.offset().top - ($(window).height() - $nextSection.outerHeight()) / 2;
            $("html, body").animate({ scrollTop: scrollTop }, 1000);
        }
    });

    // SCROLL INDICATOR AT THE TOP:
    var winHeight = $(window).height(), 
        docHeight = $(document).height(),
        progressBar = $('#progressBar'),
        max, value;
    max = docHeight - winHeight;
    progressBar.attr('max', max);
    $(document).on('scroll', function(){
        value = $(window).scrollTop();
        progressBar.attr('value', value);
    });

});