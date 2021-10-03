// // Import jQuery module (npm i jquery)
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.min'
import 'slick-carousel/slick/slick.min'
import $ from 'jquery'

window.jQuery = $
window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

})
$(document).ready(function(){
    $("#button-to-bottom").click(function(){
        var element = document.getElementById('button-to-top');
        $('html, body').animate({
            scrollTop: (getOffset2(element).top-50)
        }, 3000);
    });
    $("#button-to-top").click(function(){
        var element = document.getElementById('button-to-bottom');
        $('html, body').animate({
            scrollTop: (getOffset2(element).top-50)
        }, 3000);
    });
});

function getOffset(el) {
    el = el.getBoundingClientRect();
    return {
        left: el.left + window.scrollX,
        top: el.top + window.scrollY
    }
}
function getOffset2( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

// reviews__slider

$('.reviews__slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ,
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ,
        {
            breakpoint: 414,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ,
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ,
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});

$('.facts__slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
});


const swiper = new Swiper('.header__slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    nextButton: '.next__swiper',
    prevButton: '.prev__swiper',
    navigation: {
        nextEl: '.next__swiper',
        prevEl: '.prev__swiper',
    },
    // autoplay: {
    //     delay: false
    // },
    breakpoints: {
        768: {
            // autoplay: {
            //     delay: false
            // }
        },
        576: {
            // autoplay: {
            //     delay: false
            // }
        }
    },
});

const swiper3 = new Swiper('.wrapper__left-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    nextButton: '.next__swiper',
    prevButton: '.prev__swiper',
    navigation: {
        nextEl: '.left__next-new',
        prevEl: '.left__btn-new',
    },
});

const swiper2 = new Swiper('.facts__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    nextButton: '.next__swiper',
    prevButton: '.prev__swiper',
    navigation: {
        nextEl: '.btn__facts-next',
        prevEl: '.btn__facts-prev',
    },
});


//mobile menu
$('.menu_burger').click(function () {
    $(".mobile_menu-wrap").toggleClass("mobile_menu-active");
});

$('.navbar_top-cancel').click(function () {
    $(".mobile_menu-wrap").removeClass("mobile_menu-active");
});

$(".close").click(function(){
    $(".navbar-collapse").removeClass("show");
});






