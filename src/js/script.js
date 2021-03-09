$(document).ready(function(){
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
}) 