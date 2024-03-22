let label = document.querySelector(".check");
let add = document.querySelector(".lg-screen");

label.addEventListener("click", () => {
    add.classList.toggle("show");
});

gsap.from(".orange_box", {
    x: -1320,
    repeat: -1,
    duration: 6,
    yoyo: true,
    backgroundColor: "#FFD600",
    // boxShadow: "10px 10px 166px 32px rgba(255, 214, 0, 1)"
});

gsap.from(".spring", {
    rotationZ: 360,
    repeat: -1,
    duration: 2,
    ease: "linear",
    scaleX: 1, scaleY: 1
});

$('.slider-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: ".prev",
    nextArrow: ".next",
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});