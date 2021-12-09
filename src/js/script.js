
var quoteCarouselElement=document.querySelector('.slogan__carousel')
var projectCarouseElement=document.querySelector('.project__carousel')

if (quoteCarouselElement) {
  var slider = tns({
    container: '.slogan__carousel',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    speed: 400,
    autoplayTimeout: 5000,
    controls: false,
    navContainer: '.carousel__controls',
    autoplayButtonOutput: false,
    startIndex: 0,
    mouseDrag: true
  });

}


if (projectCarouseElement) {
  var sliderSecond = tns({
    container: '.project__carousel',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    speed: 400,
    nav: false,
    controlsContainer: '.sidebar__menu',
    autoplayButtonOutput: false,
    prevButton: ".sidebar__item_order_1",
    nextButton: ".sidebar__item_order_2",
    startIndex: window.location.search.split('=')[1],
  });
}
