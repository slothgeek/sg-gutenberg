(function($) {

    gsap.registerPlugin(ScrollTrigger);

    var animations = [
        { id: 'fade-in-left', from: { opacity: 0, x: -200 } },
        { id: 'fade-in-right', from: { opacity: 0, x: 200 } },
        { id: 'fade-in-bottom', from: { opacity: 0, y: 200 } },
        { id: 'fade-in-top', from: { opacity: 0, y: -200 } },
    ]

    var staggers = [
        { id: 'stagger-fade-in-left', from: { opacity: 0, x: 200 } },
        { id: 'stagger-fade-in-right', from: { opacity: 0, x: -200 } },
        { id: 'stagger-fade-in-bottom', from: { opacity: 0, y: 100 } },
        { id: 'stagger-fade-in-top', from: { opacity: 0, y: -100 } },
    ]

    animations.forEach( animation => {

        $(`.${animation.id}`).each(function(i) {

            gsap.from(this, {
                ...animation.from,
                duration: getDuration( this ),
                delay: getDelay( this ),
                scrollTrigger: scrollTrigger(this),
            });

        });

    });

    staggers.forEach( stagger => {

        $(`.${stagger.id}`).each(function(i) {

            gsap.from($(this).find('.sg-item'), {
                ...stagger.from,
                duration: getDuration( this ),
                delay: getDelay( this ),
                stagger: getStagger( this ),
                scrollTrigger: scrollTrigger(this),
            });

        });

    });

    function scrollTrigger( trigger ){

        var object = {
            trigger: trigger,
            start:"top 80%",
            toggleActions: "restart pause none reverse",
        }

        return object;
    }

    function getDuration( element ){
        return getAnimationTimes(element, 'drt', 1)
    }

    function getStagger( element ){
        return getAnimationTimes(element, 'stg', 0.5)
    }

    function getDelay( element ){
        return getAnimationTimes(element, 'dly')
    }

    function getAnimationTimes( element, key, seconds=0 ){
        var time = seconds;

        $(element).attr("class").split(/\s+/).forEach( c => {

            if( c.indexOf(key) > -1){
                var array_c = c.split('-');
                time = array_c.length > 2 ? parseFloat(`${array_c[1]}.${array_c[2]}`) : parseInt(array_c[1])
            }

        })

        return time;

    }

})( jQuery );