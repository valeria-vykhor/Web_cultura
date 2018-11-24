//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/bootstrap/dist/js/bootstrap.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.min.js

$(document).ready(function(){
    deleteItems();

    $('.portfolio-carousel').owlCarousel({
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
                items: 2
            },
            768:{
                items: 3
            },
            1024:{
                items: 5
            },
            1400:{
                items: 6
            }
        }
    });

    $('.review-carousel').owlCarousel({
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
                items: 2
            },
            495:{
                items: 5
            },
            1400:{
                items: 6
            }
        }
    });

    $(document).on('click','.video__poster',function(e) {
        var poster = $(this);
        var wrapper = poster.closest('.video__wrapper');

        e.preventDefault();
        
        videoPlay(wrapper);
    });

    $('.nav-item-link').click(function(e) {
        var link = $(this).attr('href');

        e.preventDefault();

        scrollIntoElement(link);

        $('.nav-modal').modal('hide');
    });
});

function videoPlay(wrapper) {
    var iframe = wrapper.find('.video__iframe');
    var src = iframe.data('src');

    wrapper.closest('.team').addClass('team__active');

    iframe.attr('src',src);
}

function deleteItems() {
    if ($('body').width() <= 767) {
        $('div.remove-item').remove();
    }
}

function scrollIntoElement(link) {
    $('html, body').animate({
        scrollTop: $(link).offset().top
    }, 1200);
}