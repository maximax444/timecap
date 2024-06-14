var controller = new ScrollMagic.Controller();
var tween = TweenMax.to(".home-ya__big span", 0.5, { css: 'width:100%', ease: Linear.easeNone });
var tween2 = TweenMax.to(".home-ya1 span", 4.5, { css: 'height:100%', ease: Linear.easeNone });
var tween3 = TweenMax.to(".home-ya2 span", 0.5, { css: 'height:100%', ease: Linear.easeNone });
var tween4 = TweenMax.to(".home-video__mask", 0.5, { css: 'opacity:1;transform:scale(100%);', ease: Linear.easeNone });


new ScrollMagic.Scene({ triggerElement: ".home-ya", triggerHook: 'onLeave', duration: 800 })
    .setPin(".home-ya")
    .addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".home-ya", triggerHook: 'onLeave', duration: 800 })
    .setTween(tween)
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: ".home-ya", triggerHook: 'onLeave', duration: 800 })
    .setTween(tween2)
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: ".home-ya", triggerHook: 'onLeave', duration: 800 })
    .setTween(tween3)
    .addTo(controller);


new ScrollMagic.Scene({ triggerElement: ".home-video", triggerHook: 'onLeave', duration: 800 })
    .setPin(".home-video")
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: ".home-video", triggerHook: 'onLeave', duration: 800 })
    .setTween(tween4)
    .addTo(controller);