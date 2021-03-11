$(document).ready(function(){
    $('.slider').slick({

        // variableWidth: true,
        // centerMode: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        infinite: false,

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
        
});