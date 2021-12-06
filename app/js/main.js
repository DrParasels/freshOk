$(function(){
  $('.top-slider__inner').slick({
   
  });

  var containerEl1 = document.querySelector('[data-ref="top-products-mix"]');
  var containerEl2 = document.querySelector('[data-ref="promo-mix"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});

