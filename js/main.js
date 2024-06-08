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