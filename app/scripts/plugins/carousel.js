( function( $ ) {
    "use strict";

    $.fn.carousel = function () {
        // settings
        var carousel = $('.carousel-slides');
        var carouselItem = 'li';
        var carouselItemThumb = $('.carousel-thumbs');
        var transitionTime = 750;
        var timeBetweenSlides = 4000;
        var pause = false;

        function carouselItems () {
            return carousel.find( carouselItem );
        };

        function carouselItemsThumbs () {
            return carouselItemThumb.find( carouselItem );
        };

        carouselItems().fadeOut();

        // set active classes
        carouselItems().first().addClass('active-slide');
        carouselItems().first().fadeIn(transitionTime);

        carouselItemsThumbs().first().addClass('active-slide-thumb');
        carouselItemsThumbs().first().fadeIn(transitionTime);

        // set transitions, could be more DRY
        var carouselTimer = setInterval(
            function () {
                var i = carousel.find(carouselItem + '.active-slide').index();

                carouselItems().eq(i).removeClass('active-slide');
                carouselItems().eq(i).fadeOut(transitionTime);

                carouselItemsThumbs().eq(i).removeClass('active-slide-thumb');

                if (carouselItems().length === i + 1) i = -1; // loop to start

                carouselItems().eq(i + 1).fadeIn(transitionTime);
                carouselItems().eq(i + 1).addClass('active-slide');

                carouselItemsThumbs().eq(i + 1).addClass('active-slide-thumb');
            }, transitionTime +  timeBetweenSlides
        );

        carousel.hover(function(e){
            clearInterval(carouselTimer);
        }, function(e){
            carouselTimer = setInterval(
                function () {
                var i = carousel.find(carouselItem + '.active-slide').index();

                carouselItems().eq(i).removeClass('active-slide');
                carouselItems().eq(i).fadeOut(transitionTime);

                carouselItemsThumbs().eq(i).removeClass('active-slide-thumb');

                if (carouselItems().length === i + 1) i = -1; // loop to start

                carouselItems().eq(i + 1).fadeIn(transitionTime);
                carouselItems().eq(i + 1).addClass('active-slide');

                carouselItemsThumbs().eq(i + 1).addClass('active-slide-thumb');
            }, transitionTime +  timeBetweenSlides );
        });

    };

}( jQuery ));