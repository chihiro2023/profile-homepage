$(function () {

    /*スライドショー
    ----------------------------------------------------------*/
    $('#slideshow').each(function () {
        var $slides = $(this).find('img'),
            slideCount = $slides.length,
            currentIndex = 0;
        
        $slides.eq(currentIndex).fadeIn();

        setInterval(showNextSlide, 7500);

        function showNextSlide () {
            var nextIndex = (currentIndex + 1) % slideCount;
            $slides.eq(currentIndex).fadeOut();
            $slides.eq(nextIndex).fadeIn();
            currentIndex = nextIndex;
        }
    })

    /*ナビゲーションの開閉
    ------------------------------------------------------------*/
    $('.toggle_btn').on('click', function () {
        if ($('#header').hasClass('open')) {
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });

    $('#mask').on('click', function() {
        $('#header').removeClass('open');
    });

    $('#navi a').on('click', function () {
        $('#header').removeClass('open');
    });

    /*スティッキーヘッダー
    -------------------------------------------------------------*/
    $('#header').each(function(){

        var $window = $(window),
            $header = $(this),

            headerOffsetTop = $header.offset().top;

        
            $window.on('scroll', function() {
                if($window.scrollTop() > headerOffsetTop) {
                    $header.addClass('sticky');
                    
                } else {
                    $header.removeClass('sticky');
                }
            });

            $window.trigger('scroll');
    });
});