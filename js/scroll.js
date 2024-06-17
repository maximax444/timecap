var controller = new ScrollMagic.Controller();
var tween = TweenMax.to(".home-ya__big span", 0.5, { css: 'width:100%', ease: Linear.easeNone });
var tween2 = TweenMax.to(".home-ya1 span", 4.5, { css: 'height:100%', ease: Linear.easeNone });
var tween3 = TweenMax.to(".home-ya2 span", 0.5, { css: 'height:100%', ease: Linear.easeNone });
var tween4 = TweenMax.to(".home-video__mask", 0.5, { css: 'opacity:1;transform:scale(100%);', ease: Linear.easeNone });
var tween5 = TweenMax.to(".home-video__title", 0.5, { css: 'transform:scale(180%);', ease: Linear.easeNone });

var tween6 = TweenMax.to(".main__circles", 0.5, { css: 'transform:rotate(179deg);', ease: Linear.easeNone });
var tween7 = TweenMax.to(".main__circles", 0.5, { css: 'opacity:0;', ease: Linear.easeNone });
var tween8 = TweenMax.to(".main__subtitle", 0.5, { css: 'opacity:0;', ease: Linear.easeNone });
var tween9 = TweenMax.to(".main__scroll", 0.5, { css: 'opacity:0;', ease: Linear.easeNone });
var tween91 = TweenMax.to(".main__red", 0.5, { css: 'opacity:0;', ease: Linear.easeNone });
var tween92 = TweenMax.to(".main__grey", 0.5, { css: 'opacity:0;', ease: Linear.easeNone });
var tween10 = TweenMax.to(".main__mask", 0.5, { css: 'top:0;transform:scale(1600%);', ease: Linear.easeNone });
var tween11 = TweenMax.to(".main__mask img", 0.5, { css: 'top:0;', ease: Linear.easeNone });
var tween12 = TweenMax.to(".main__title", 0.5, { css: 'transform:scale(100%);opacity:1', ease: Linear.easeNone });


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
new ScrollMagic.Scene({ triggerElement: ".home-video", triggerHook: 'onLeave', duration: 800 })
    .setTween(tween5)
    .addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".main", triggerHook: 'onLeave', duration: 1500 })
    .setPin(".main")
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: ".main", triggerHook: 'onLeave', duration: 600 })
    .setTween(tween6)
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: ".main", triggerHook: 'onLeave', duration: 300, offset: 300 })
    .setTween(tween7)
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: ".main", triggerHook: 'onLeave', duration: 300, offset: 300 })
    .setTween(tween91)
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: ".main", triggerHook: 'onLeave', duration: 300, offset: 300 })
    .setTween(tween92)
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: ".main", triggerHook: 'onLeave', duration: 300, offset: 300 })
    .setTween(tween8)
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: ".main", triggerHook: 'onLeave', duration: 300, offset: 300 })
    .setTween(tween9)
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: ".main", triggerHook: 'onLeave', duration: 900, offset: 600 })
    .setTween(tween10)
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: ".main", triggerHook: 'onLeave', duration: 900, offset: 600 })
    .setTween(tween11)
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: ".main", triggerHook: 'onLeave', duration: 900, offset: 600 })
    .setTween(tween12)
    .addTo(controller);