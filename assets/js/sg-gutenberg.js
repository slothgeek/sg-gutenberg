(function($) {

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sg-slider');

        elems.forEach(el => {
            M.Slider.init(el, {
                indicators: Boolean(el.getAttribute('data-indicators')),
                height: parseInt(el.getAttribute('data-height')),
                duration: parseInt(el.getAttribute('data-duration')),
                interval: parseInt(el.getAttribute('data-interval'))
            })

            $(el).parent().height(el.getAttribute('data-height'));
        });
    });

})( jQuery );