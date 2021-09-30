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


// reviews__slider

$('.reviews__slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
});
$('.facts__slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
});


const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    nextButton: '.next__swiper',
    prevButton: '.prev__swiper',
    navigation: {
        nextEl: '.next__swiper',
        prevEl: '.prev__swiper',
    },
});

const swiper2 = new Swiper('.facts__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
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





