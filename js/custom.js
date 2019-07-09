$(document).ready(function() {
  let btn = $('.product__button button[type="button"]');
  let featuredItem = $('.featured__item');
console.log(featuredItem );
  btn.on('click', function () {
    let btnTriangle = $(this).find('.btn__triangle');
    let btnText = $(this).find('.btn__text');
    let btnWrapImg = $(this).parent().siblings('.product__wrap-img');

    if(!$(this).find('.btn__triangle').hasClass('btn__triangle-click')){

      btnTriangle.addClass('btn__triangle-click');
      btnText.addClass('btn__text-click');
      btnWrapImg.addClass('product__wrap-img_overlay');

    }else{
      btnTriangle.removeClass('btn__triangle-click');
      btnText.removeClass('btn__text-click');
      btnWrapImg.removeClass('product__wrap-img_overlay');
    }

  })

  featuredItem.on('mouseover', function () {
    $(this).find('.featured__btn').addClass('featured__btn_visible');
    $(this).addClass('featured__item_hidden');

  }).on('mouseout', function () {
    $(this).find('.featured__btn').removeClass('featured__btn_visible');
    $(this).removeClass('featured__item_hidden');

  })


  $('.slider__list').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });

  $('.currency__list').on('click', function (e) {

    let target = $(e.target);
console.log(e.target);

  });

});



