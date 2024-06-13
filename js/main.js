function phoneInputValidation(event) {
    if (!("1234567890+\(\)\- ".indexOf(event.key) != -1)) {
        event.preventDefault();
    }
}
window.addEventListener('scroll', function () {
    const scrollTopPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTopPosition > 100) {
        document.querySelector(".header").classList.add("active");
    } else {
        document.querySelector(".header").classList.remove("active");
    }
}
);

let popupClose = document.querySelectorAll('.popup__close');
let thxClose = document.querySelector('.overlay-thx__btn');
let popup = document.querySelector('.overlay-call');
let popupThx = document.querySelector('.overlay-thx');
let popupOpen = document.querySelectorAll('.modal');
popupClose.forEach((el) => {
    el.addEventListener('click', function () {
        el.closest(".overlay").classList.remove('overlay-active');
    });
});
popupOpen.forEach((el) => {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        popup.classList.add('overlay-active');
    });
});
if (document.querySelector('.overlay-call')) {
    document.querySelector('.overlay-call').onclick = function (e) {
        if (!e.target.closest('.popup')) {
            popup.classList.remove('overlay-active');
        };
    };
}
if (document.querySelector('.overlay-thx')) {
    document.querySelector('.overlay-thx').onclick = function (e) {
        if (!e.target.closest('.popup')) {
            popupThx.classList.remove('overlay-active');
        };
    };
}
thxClose.addEventListener("click", (e) => {
    e.preventDefault();
    popupThx.classList.remove('overlay-active');
});

let menuOpen = document.querySelector(".header__burg");
let menu = document.querySelector(".menu");

menuOpen.addEventListener("click", (e) => {
    e.preventDefault();
    menuOpen.classList.toggle("active");
    menu.classList.toggle("active");
});


let cameras = document.querySelectorAll(".cameras-prod__el");
let camerasNames = document.querySelectorAll(".cameras-prod__name");

if (camerasNames) {
    camerasNames.forEach(el => {
        el.addEventListener("click", () => {
            let currCamera = el.closest(".cameras-prod__el");
            if (currCamera.classList.contains("active")) {
                currCamera.classList.remove("active");
            } else {
                cameras.forEach(el2 => {
                    el2.classList.remove("active");
                    currCamera.classList.add("active");
                });
            }
            AOS.refresh();
        });
    });
}

const hwaysNames = document.querySelectorAll(".home-ways__name");
const hwaysBlocks = document.querySelectorAll(".home-ways__block");

if (hwaysNames) {
    hwaysNames.forEach(el => {
        el.addEventListener("click", () => {
            if (window.innerWidth <= 991) {

                if (el.closest(".home-ways__block").classList.contains("active")) {
                    el.closest(".home-ways__block").classList.remove("active");
                } else {
                    hwaysBlocks.forEach(el2 => {
                        el2.classList.remove("active");
                    });
                    el.closest(".home-ways__block").classList.add("active");
                }
                
                AOS.refresh();
            }
        });
    });
}

const howTabs = document.querySelectorAll(".home-how__tab");
const howConts = document.querySelectorAll(".home-how__cont-block");
if (howTabs) {
    howTabs.forEach((el) => {

        el.addEventListener('click', function () {
            let index = Array.prototype.indexOf.call(howTabs, this);
            if (!this.classList.contains('active')) {
                document.querySelectorAll('.home-how__tab').forEach((el2) => {
                    el2.classList.remove('active');
                });
                this.classList.add('active');
                howConts.forEach((el3) => {
                    el3.classList.remove('active');
                });
                howConts[index].classList.add('active')
            }
        });
    });
}

const howNames = document.querySelectorAll(".home-how__name");
const howBlocks = document.querySelectorAll(".home-how__cont-block");

if (howNames) {
    howNames.forEach(el => {
        el.addEventListener("click", () => {
            if (window.innerWidth <= 991) {
                if (el.closest(".home-how__cont-block").classList.contains("active")) {
                    el.closest(".home-how__cont-block").classList.remove("active");
                } else {
                    howBlocks.forEach(el2 => {
                        el2.classList.remove("active");
                    });
                    el.closest(".home-how__cont-block").classList.add("active");
                }
                AOS.refresh();
            }
        });
    });
}




const swiper = new Swiper('.home-shooting .swiper', {

    slidesPerView: 1,
    spaceBetween: 19,
    loop: true,
    effect: "fade",
    // Navigation arrows
    navigation: {
        nextEl: '.home-shooting__next',
        prevEl: '.home-shooting__prev',
    }
});