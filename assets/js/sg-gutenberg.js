(function($) {

    var controller = new ScrollMagic.Controller();

    var blockCount = 0;

    $('.animate').addClass( (index) => {
        blockCount++;
        return `a-${index}`;
    });

    for(var index=0; index<blockCount; index++){
        var target = `.animate.a-${index}`;

        var thetween = tween('', target, 1.3);
        new ScrollMagic.Scene({
            triggerElement: target
        })
            .setTween(thetween)
            .addTo(controller);

    }

    function tween(type, target, duration, delay = 0){
        var tween = null;
        switch (type) {
            case 'scale':
                tween = TweenMax.staggerFromTo(target, duration, {transform: "scale(0)"}, {transform: "scale(1)", ease: Back.easeOut}, parseFloat(delay));
                break;
            case 'fade-in-left':
                tween = TweenMax.staggerFromTo(target, duration, {left: "-110%", opacity:0}, {left: 0, opacity:1, ease: Back.easeOut}, parseFloat(delay));
                break;
            case 'fade-in-right':
                tween = TweenMax.staggerFromTo(target, duration, {right: "-110%"}, {right: 0, ease: Back.easeOut}, parseFloat(delay));
                break;
            default:
                tween = TweenMax.staggerFromTo(target, duration, {opacity:0}, {opacity:1, ease: Back.easeOut}, parseFloat(delay));
                break;
        }

        return tween;
    }





})( jQuery );