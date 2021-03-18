$(document).ready(function(){
    $('.carousel').slick({
        infinite:true,
        centerMode: true,
        slidesToScroll: 1,
        variableWidth: true,
        slidesToShow: 3,
        centerPadding: '60px',
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/next.png"></button>',
        // responsive: [
        //     {
        //       breakpoint: 767,
        //       settings: {
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 1
        //       }
        //     }
        // ]

    });

      function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.variant-item__content').eq(i).toggleClass('variant-item__content_active');
                $('.variant-item__switch').eq(i).toggleClass('variant-item__switch_active');
            })
        });
    };

    toggleSlide('.variant-item__details');
    toggleSlide('.variant-item__back');

    $('.header__hamburger').on('click', function(e) {
        e.preventDefault();
        $('.header__hamburger').toggleClass('header__hamburger_active');
        $('.header__toggle').toggleClass('header__toggle_active');
    })
        
});