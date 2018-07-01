//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/bootstrap/dist/js/bootstrap.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.min.js

$(document).ready(function(){
    $(".portfolio-carousel").owlCarousel({
        loop: true,
        margin: 10,
        merge: true,
        // autoplay:true,
        nav: true,
        dots: false,
        autoplayTimeout: 3000,
        smartSpeed: 700,
        responsive:{
            0:{
                items: 3
            },
            768:{
                items: 5
            },
            1400:{
                items: 6
            }
        }
    });

    $(".review-carousel").owlCarousel({
        loop: true,
        margin: 30,
        merge: true,
        // autoplay:true,
        nav: true,
        dots: false,
        autoplayTimeout: 3000,
        smartSpeed: 700,
        responsive:{
            0:{
                items: 5
            },
            768:{
                items: 5
            },
            1400:{
                items: 6
            }
        }
    });

    $(document).on('click','.video__poster',function(e) {      
        e.preventDefault();
        var poster = $(this);
        var wrapper = poster.closest('.video__wrapper');
        videoPlay(wrapper);
      });
      
      function videoPlay(wrapper) {
        var iframe = wrapper.find('.video__iframe');
        var src = iframe.data('src');
        wrapper.closest('.team').addClass('team__active');
        iframe.attr('src',src);
      }
});