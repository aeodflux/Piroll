
var provslid=document.querySelector('.my-slider')
var provslid2=document.querySelector('.project__slider')
var gal=document.querySelector('.gallery__item_order_2')

if (provslid) {
  var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    speed: 400,
    autoplayTimeout: 5000,
    controls: false,
    navContainer: '.carousel__container',
    autoplayButtonOutput: false,
    startIndex: 0,
  });

}


if (provslid2) {
  var sliderSecond = tns({
    container: '.project__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    speed: 400,
    nav: false,
    controlsContainer: '.sidebar__menu',
    autoplayButtonOutput: false,
    prevButton: ".sidebar__item_first",
    nextButton: ".sidebar__item_second",
    startIndex: window.location.search.split('=')[1],
  });
}
