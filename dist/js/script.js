jQuery(document).ready(function($){
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
        responsive: [
            {
              breakpoint: 767,
              settings: {
                // arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
        ]

    });
      
    //Card

    // function toggleSlide(item) {
    //     $(item).each(function(i) {
    //         $(this).on('click', function(e) {
    //             e.preventDefault();
    //             $('.variant-item__content').eq(i).toggleClass('variant-item__content_active');
    //             $('.variant-item__switch').eq(i).toggleClass('variant-item__switch_active');
    //         })
    //     });
    // };

    // toggleSlide('.variant-item__details');
    // toggleSlide('.variant-item__back');

    //Hamburger

    $('.header__hamburger').on('click', function(e) {
        e.preventDefault();
        $('.header__hamburger').toggleClass('header__hamburger_active');
        $('.header__toggle').toggleClass('header__toggle_active');
    });

    //Buttot from scroll on top
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 1000) {
            $('.chevron').fadeIn();
        } else {
            $('.chevron').fadeOut();
        }
    });

    //Slowly scroll
    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    //Modal

    $('.contact__button').on('click', function() {
        $('.overlay, .modal-data').fadeIn('slow');
    });

    $('.button_large').on('click', function() {
        $('.overlay, .modal-payment').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
        $('.overlay, .modal-payment, .modal-data').fadeOut('slow');
    });

    //validate

    function validateForms(form) {
        $(form).validate({
            rules: {
              name: "required",
              email: {
                required: true,
                email: true
              },
              phone: "required" 
            },
            messages: {
                name: "Пожалуйста введите свое имя",
                email: {
                  required: "Пожалуйста введите свою электронную почту",
                  email: "Ваш e-mail должен иметь формат name@domain.com"
                },
                phone: "Пожалуйста введите свой номер телефона"
              }
        });
    };

    validateForms('.consultation__form');
    validateForms('#questions-form');
    validateForms('#data-form');
    validateForms('#paymant-form');
        
});