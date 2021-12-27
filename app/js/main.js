$(function () {

  var $range = $(".filter-price__input"),
    $inputFrom = $(".filter-price__js-input-from"),
    $inputTo = $(".filter-price__js-input-to"),
    instance,
    min = 0,
    max = 10000,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    type: "double",
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 0) {
      $('.header__top').addClass('header-fixed');
    } else {
      $('.header__top').removeClass('header-fixed');
    }
  });

  var header = $('.header__top'),
    scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 100 && scrolled < scrollPrev) {
      header.addClass('out');
    } else {
      header.removeClass('out');
    }
    scrollPrev = scrolled;
  });

  $('.menu__btn').on('click', function () {
    $('.menu__mobile-nav').toggleClass('menu__mobile-nav--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  $('.catalog-content__filter-settings').on('click', function () {
    $('.catalog__filter').toggleClass('catalog__filter--active');
    $('.catalog-content__filter-settings').toggleClass('catalog-content__filter-settings--active');
  });

  $('.user-nav__link--search').on('click', function () {
    $('.header__form').toggleClass('header__form--active');
  });

  $('.categories-title').on('click', function () {
    $('.categories-list').toggleClass('categories-list--close');
    $('.categories-title').toggleClass('categories-title--close');
  });

  $('.promo-title').on('click', function () {
    $('.promo-list').toggleClass('promo-list--close');
    $('.promo-title').toggleClass('promo-title--close');
  });




  $('.promo-title').on('click', function () {
    $('.promo-list').toggleClass('promo-list--close');
    $('.promo-title').toggleClass('promo-title--close');
  });

  $('.promo-title').on('click', function () {
    $('.promo-list').toggleClass('promo-list--close');
    $('.promo-title').toggleClass('promo-title--close');
  });





  $('.prise-title').on('click', function () {
    $('.prise-list').toggleClass('prise-list--close');
    $('.prise-title').toggleClass('prise-title--close');
  });

  $('.brands-title').on('click', function () {
    $('.brands-list').toggleClass('brands-list--close');
    $('.brands-title').toggleClass('brands-title--close');
  });

  $('.catalog-content__filter-btn').on('click', function () {
    $('.catalog-content__filter-btn').removeClass('catalog-content__filter-btn--active');
    $(this).addClass('catalog-content__filter-btn--active');
  });

  $('.catalog-content__filter-btn--list').on('click', function () {
    $('.catalog-content__inner').addClass('catalog-content__inner--list');
  });

  $('.catalog-content__filter-btn--grid').on('click', function () {
    $('.catalog-content__inner').removeClass('catalog-content__inner--list');
  });

  $('.tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.tabs__top-item').removeClass('tabs__top-item--active')
    $(this).addClass('tabs__top-item--active');
    $('.tabs__content-item').removeClass('tabs__content-item--active');
    $($(this).attr('href')).addClass('tabs__content-item--active');
  });

  // $('.menu__link').on('click', function () {
  //   $('.menu__list').removeClass('menu__list--active');
  //   $('.menu__btn').toggleClass('menu__btn--active');
  //   $('body').removeClass('dark');
  // });


  $('.product-info__rating, .comment__raiting').rateYo({
    starWidth: '16px',
    normalFill: '#C1C1C1',
    ratedFill: '#FFB800',
    readOnly: true,
    starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.0229731 6.16426C0.0780973 5.99454 0.224753 5.87085 0.401315 5.84523L5.36139 5.12445L7.57966 0.629872C7.6586 0.469872 7.82157 0.368591 7.99997 0.368591C8.17841 0.368591 8.34135 0.469872 8.42032 0.629872L10.6387 5.12445L15.5987 5.84523C15.7752 5.87085 15.9219 5.99454 15.977 6.16422C16.0322 6.33394 15.9862 6.52022 15.8584 6.64475L12.2694 10.1433L13.1165 15.0834C13.1467 15.2593 13.0744 15.4369 12.9301 15.5418C12.8484 15.6012 12.7517 15.6313 12.6545 15.6313C12.5799 15.6313 12.505 15.6136 12.4365 15.5775L8 13.2451L3.56374 15.5775C3.40577 15.6605 3.21443 15.6467 3.07009 15.5418C2.92574 15.4369 2.8534 15.2592 2.88356 15.0833L3.73096 10.1433L0.141566 6.64472C0.0138168 6.52022 -0.0322151 6.33394 0.0229731 6.16426Z"/></svg>',
    spacing: "6px"
  });

  $('.review__form-rate').rateYo({
    starWidth: '16px',
    normalFill: '#C1C1C1',
    ratedFill: '#FFB800',
    fullStar: true,
    starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.0229731 6.16426C0.0780973 5.99454 0.224753 5.87085 0.401315 5.84523L5.36139 5.12445L7.57966 0.629872C7.6586 0.469872 7.82157 0.368591 7.99997 0.368591C8.17841 0.368591 8.34135 0.469872 8.42032 0.629872L10.6387 5.12445L15.5987 5.84523C15.7752 5.87085 15.9219 5.99454 15.977 6.16422C16.0322 6.33394 15.9862 6.52022 15.8584 6.64475L12.2694 10.1433L13.1165 15.0834C13.1467 15.2593 13.0744 15.4369 12.9301 15.5418C12.8484 15.6012 12.7517 15.6313 12.6545 15.6313C12.5799 15.6313 12.505 15.6136 12.4365 15.5775L8 13.2451L3.56374 15.5775C3.40577 15.6605 3.21443 15.6467 3.07009 15.5418C2.92574 15.4369 2.8534 15.2592 2.88356 15.0833L3.73096 10.1433L0.141566 6.64472C0.0138168 6.52022 -0.0322151 6.33394 0.0229731 6.16426Z"/></svg>',
    spacing: "6px"
  });

  $('.top-slider__inner').slick({
    arrows:true,
    donts: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
          dots: true,
          arrows: false,
        }
      }]
  });

  $('.product-info__counter').styler();

  $('.select-style').styler();

  $('.gallery').slick({
    responsive: [{
        breakpoint: 1200,
        settings: {
          dots: true,
          arrows: false
        }
      }]
  });

  $('.recent-products__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false
        }
      }
    ]
  });

  $('.gallery').slickLightbox({
    src: 'src',
    itemSelector: '.gallery-popup img',
    background: 'rgba(0, 0, 0, .7)',
    dots: true,
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