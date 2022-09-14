/**
* ---------------------------------------------------------------------------
Template Name: Personal Portfolio Template 
Template URL: 
Author: princ-imran
Version: 1.0
* --------------------------------------------------------------------------- 
*/

(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        var wind = $(window);

        var main_height = $(".main-height").outerHeight();

        $(".sub-height").outerHeight(main_height);

/*---------------------------------------------------
                TypeJS
---------------------------------------------------*/
        $('.header .caption h6').typed({
            strings: ["Web Developer", "UI/UX  Designer", "Laravel"],
            loop: true,
            startDelay: 1000,
            backDelay: 1000,
            typeSpeed: 30,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true
        });

/*---------------------------------------------------
                Button Style
---------------------------------------------------*/
        $('.butn')
            .on('mouseenter', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({
                    top: relY,
                    left: relX
                })
            })
            .on('mouseout', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({
                    top: relY,
                    left: relX
                })
            });

        $('[href=#]').click(function () {
            return false
        });
/*---------------------------------------------------
                CounterUp 
---------------------------------------------------*/
        $('.numbers .counter').counterUp({
            delay: 10,
            time: 1500
        });

/*---------------------------------------------------
                OwlCarousel 
---------------------------------------------------*/

        $('.clients .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            mouseDrag: false,
            autoplay: true,
            smartSpeed: 500
        });

/*---------------------------------------------------
                SmothScrool/ScrollIt 
---------------------------------------------------*/
        $.scrollIt({
            upKey: 38, // key code to navigate to the next section
            downKey: 40, // key code to navigate to the previous section
            easing: 'swing', // the easing function for animation
            scrollTime: 600, // how long (in ms) the animation takes
            activeClass: 'active', // class given to the active nav element
            onPageChange: null, // function(pageIndex) that is called when page is changed
            topOffset: -60 // offste (in px) for fixed top navigation
        });

/*---------------------------------------------------
                Navbar scrolling 
---------------------------------------------------*/

        wind.on("scroll", function () {

            var bodyScroll = wind.scrollTop(),
                navbar = $(".navbar-default");

            if (bodyScroll > 300) {

                navbar.addClass("nav-scroll");

            } else {

                navbar.removeClass("nav-scroll");
            }
        });
        // stellar
            wind.stellar();
/*---------------------------------------------------
                Progresbar 
---------------------------------------------------*/
        wind.on('scroll', function () {
            $(".skills-progress span").each(function () {
                var bottom_of_object =
                    $(this).offset().top + $(this).outerHeight();
                var bottom_of_window =
                    $(window).scrollTop() + $(window).height();
                var myVal = $(this).attr('data-value');
                if (bottom_of_window > bottom_of_object) {
                    $(this).css({
                        width: myVal
                    });
                }
            });
        });

/*---------------------------------------------------
                Isotop 
---------------------------------------------------*/
        var portfolioItem = $('.portfolio-items');
        portfolioItem.imagesLoaded(function () {

            // Add isotope click function
            $('.filter-menu li').on('click', function () {
                $(".filter-menu li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr('data-filter');
                portfolioItem.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });

            portfolioItem.isotope({
                itemSelector: '.single-item',
                layoutMode: 'fitRows',
            });
        });

/*---------------------------------------------------
            Counter 
---------------------------------------------------*/
        
        var counterSelector = $('.counter');
        counterSelector.counterUp({
            delay: 10,
            time: 2000
        });

/*---------------------------------------------------
            Swipebox 
---------------------------------------------------*/
  
        $(".gallery-lightbox").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

    });

    jQuery(window).load(function () {

    });

}(jQuery));