$(document).ready(function(){
    $('.carousel').slick({
        infinite:true,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
        ]

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