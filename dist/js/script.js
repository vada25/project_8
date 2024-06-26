$(document).ready(function(){
  $('.carousel__inner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: false,
      infinite: true,
  });

  
  $('.carousel__bottom').slick({
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
      infinite: true,
  });


  $('ul.menu__tabs').on('click', 'li:not(.menu__tab_active)', function() {
    $(this)
      .addClass('menu__tab_active').siblings().removeClass('menu__tab_active')
      .closest('.menu').find('.menu__content').removeClass('menu__content_active').eq($(this).index()).addClass('menu__content_active')
  });


  $('.order__descr__active').click(function() {
    $('.order__descr__expand').toggleClass('order__descr__expanded');
  });


  $('#phone').mask('+380 (00) 000 00 00');
  
  //menu page
 
  $('.item_set').on('click', function() {
    // Hide the specified blocks
    $('.carousel_top, .promo__main__page__galery, .menu__tabs').hide();

    // Destroy slick slider in the specified block
    $('.menu__content').slick('unslick');
    // Add new class to the specified block
    $('.menu__content').addClass('menu__content__list');
  });

  $('.menu__content__wrapper').on('click', function() {
    var $clickedCard = $(this);
    
    
    
    var $productDetails = $('#menu__details');
    var $productDetailsContent = $productDetails.find('.menu__details__content');
    $productDetailsContent.html($clickedCard.html());
    $('.carousel_top, .promo__main__page__galery, .menu__tabs, .menu__content__wrapper').hide();
    $('.menu__content').slick('unslick');

    $productDetails.show();
  });

});