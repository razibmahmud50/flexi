/*
 ***testimonial
 ***brand slider
 ***portfolio filter
 ***global menu link
 ***preloader
 */
(function($) {
    "use strict";

    //testimonial
    $('.testimonial-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:false,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            1000:{
                items:3
            }
        }
     });
     //brand slider
    $('.brand-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        loop:true,
        responsive:{
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
             992:{
                items:6
            }
        }
    });
    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
    });

    // filter functions
    var filterFns = {
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('#filters').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });
    //all section display none without home5
    $('.about5,.resume,.portfolio5,.contact').css('display', 'none');

    //only link section display flex and other display none
    $('.menu-item').on("click", function() {

        // Hide all other sections
        $('main > section').css('display', 'none');

        //Show only one we want
        var addressValue = $(this).attr('href');
        $(addressValue).css('display', 'flex');
    });
    
     //resume progress bar 
    $('.skillbar').each(function() {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 2000);
    });

    //preloader
    $(window).load(function() {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");
    });
    
}(jQuery));

    