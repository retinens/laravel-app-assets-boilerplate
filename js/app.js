require('./bootstrap');

function openCartSidebar() {
    document.getElementById("mySidenav").classList.add('sidebar-open');
    document.getElementById("overlay").style.display = "block";
    document.body.classList.add('modal-open');
    document.body.classList.add('overflow-hidden');
}

function openSidebar(evt) {
    evt.preventDefault();
    console.log('touched')
    openCartSidebar()
}


document.addEventListener('DOMContentLoaded', function() {
    let cartButton = document.getElementById("cartButton1")
    cartButton.addEventListener('click',openSidebar)
    window.livewire.on('openCartSidebar', function () {
        openCartSidebar();
    })
})

$(window).ready(function () {
    window.livewire.on('openCartModal', function () {
        $('#cartModal').modal('show')
    })
    window.livewire.on('scrollUp', function () {
        setTimeout(() => {
            window.scrollTo(0, 0);
        },500);
    })
});

const WOW = require('wowjs');
window.wow = new WOW.WOW({
    offset: 200,          // default
});
window.wow.init();

import Swiper from 'swiper';

// import Swiper styles
// core version + navigation, pagination modules:
import SwiperCore, {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/core';
import lozad from 'lozad'

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Autoplay,EffectFade]);
window.Swiper = Swiper;

// $(document).scroll(function () {
//     let $nav = $("nav");
//     let $secondNav = $("#second-nav")
//
//     // $nav.toggleClass('navbar-expanded', $(this).scrollTop() > ($nav.height())*0.6);
//     if ($(this).scrollTop() < ($nav.height())){
//         $secondNav.slideDown();
//         console.log("slidedown")
//     }
//
//     if ($(this).scrollTop() > ($nav.height())){
//         $secondNav.slideUp();
//         console.log("slideup")
//     }
// });
var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
let $nav = $("nav");
let $secondNav = $("#second-nav")

window.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
        $secondNav.slideUp();
    } else {
        $secondNav.slideDown();
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

require('fittextjs')

for (let links = document.links, i = 0, a; a = links[i]; i++) {
    if (a.host !== location.host) {
        a.target = '_blank';
    }
}
$("#show_hide_password a").on('click', function(event) {
    event.preventDefault();
    if($('#show_hide_password input').attr("type") == "text"){
        $('#show_hide_password input').attr('type', 'password');
        $('#password-icon').addClass( "fa-eye-slash" );
        $('#password-icon').removeClass( "fa-eye" );
    }else if($('#show_hide_password input').attr("type") == "password"){
        $('#show_hide_password input').attr('type', 'text');
        $('#password-icon').removeClass( "fa-eye-slash" );
        $('#password-icon').addClass( "fa-eye" );
    }
});

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

require('fslightbox');
