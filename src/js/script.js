
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
if ('#myContent') {
  WZoom.create('#myContent', {
    minScale: 1,
    maxScale: 2,
  });
  WZoom.create('#myContent2', {
    minScale: 1,
    maxScale: 2,
  });
  WZoom.create('#myContent3', {
    minScale: 1,
    maxScale: 2,
  });
  WZoom.create('#myContent4', {
    minScale: 1,
    maxScale: 2,
  });
  WZoom.create('#myContent5', {
    minScale: 1,
    maxScale: 2,
  });
  WZoom.create('#myContent6', {
    minScale: 1,
    maxScale: 2,
  });
  WZoom.create('#myContent7', {
    minScale: 1,
    maxScale: 2,
  });
  WZoom.create('#myContent8', {
    minScale: 1,
    maxScale: 2,
  });
  WZoom.create('#myContent9', {
    minScale: 1,
    maxScale: 2,
  });
  WZoom.create('#myContent10', {
    minScale: 1,
    maxScale: 2,
  });
  WZoom.create('#myContent11', {
    minScale: 1,
    maxScale: 2,
  });
  WZoom.create('#myContent12', {
    minScale: 1,
    maxScale: 2,
  });
}
