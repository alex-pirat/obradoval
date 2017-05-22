$(function() {
/******************************************* SLIDER ДОПОЛНЕНИЯ К БУКЕТУ ************************************/

// slick
  $('.js_slick_slider2').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
                
    responsive: [
    /*  {
        breakpoint: 1439,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },*/
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 670,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          speed: 100,
          cssEase: 'linear'
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          speed: 100,
          cssEase: 'linear'
          
        }
      }
    ]
  });
        
      $('.mp_items_out.one .double_prev').click(function(){
    $('.mp_items_out.one .js_slick_slider2').slick('slickPrev');
  return false;
  });
  $('.mp_items_out.one .double_next').click(function(){
    $('.mp_items_out.one .js_slick_slider2').slick('slickNext');
  return false;
  });
        
        $('.mp_items_out.two .double_prev').click(function(){
    $('.mp_items_out.two .js_slick_slider2').slick('slickPrev');
  return false;
  });
  $('.mp_items_out.two .double_next').click(function(){
    $('.mp_items_out.two .js_slick_slider2').slick('slickNext');
  return false;
  });

///()()()()()()()()()()()()()()()()()()()()(----- ВАШИ КОНТАКТЫ -----)()()()()()()()()()()()()()()()()()()()()//

  //niceScroll

 if($(".main_list").length) {
     
 
  $(".main_list").niceScroll({

    background: "#ccc",
    cursorcolor:"#44b649",
    railalign: "left",
    cursorwidth: "10px",
    cursorborder: "#44b649",
    cursoropacitymin: "1"
  });
  }
  //End niceScroll

   function resizeScrenn(){

    if ($(window).width() <= 640) {

      $(".main_info").unbind("click").bind('click', function() {

        if(!$(this).hasClass('active')) {
          $('.main_info').removeClass('active').children('.sup_list').slideUp(500);
          $(this).addClass('active');
          $(this).children('.sup_list').slideDown(500);
        } else {
          $(this).removeClass('active').children('.sup_list').slideUp(500);
        }
     });
      
    }  else if ($(window).width() > 640) {
       $(".main_info").unbind('click').bind('click', function(){
          $(".main_info").removeClass("active");
          $(this).addClass("active");
       });
    }

  }  resizeScrenn();
      
  $(window).resize(function(){
    resizeScrenn();
  });

 
  $('.close_btn').click(function(){
    $('.pop_up').css("visibility", "hidden");
    $('#ascrail2000').css("visibility", "hidden");
    $('.wrap_main_content').css("visibility", "hidden");
  });   

  $('.show_popup').click(function(){
    $('.pop_up').css("visibility", "visible");
    $('.wrap_main_content').css("visibility", "visible");
    $('#ascrail2000').css("visibility", "visible");
  });

  $('.pop_up').click(function(){
    $(this).css("visibility", "hidden");
    $('.wrap_main_content').css("visibility", "hidden");
    $('#ascrail2000').css("visibility", "hidden"); 
  });

///()()()()()()()()()()()( THE END )()()()()()()()()(----- ВАШИ КОНТАКТЫ -----)()()()()()()()()()()()()()()()()()()()()//

/*****************Счетчиек количества товаров в корзине***************************************/

$('.backet_edit_pluse').on('click',function(){
        var $qty=$(this).closest('.backet_edit_sum').find('.backet_edit_input');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    $('.backet_edit_minus').on('click',function(){
        var $qty=$(this).closest('.backet_edit_sum').find('.backet_edit_input');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
        }
    });
/*****************END Счетчиек количества товаров***************************************/

/***************** ТАБНЫЙ СЛАЙДЕР ***************************************/

 $('.tabs_slide_1').on('click', 'a:not(.active)', function() {

    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.put_backet').find('div.js_slick_slider2').removeClass('active').eq($(this).index()).addClass('active');

     //$(".js_slick_slider2").slick('reinit'); //  инициализировать слайдер после клика на таб:
  });


 /***************** END ТАБНЫЙ СЛАЙДЕР ***************************************/

/***************** КНОПКА ЗАКРЫТИЯ КАРТОЧКИ С ТОВАРОМ ***************************************/

  $('.backet_edit_close').click(function(){
      $(this).parents('.backet_item_hide').animate({opacity: 0}, 700,function(){
        $(this).parents('.backet_item').hide();
        });
  });

  
/***************** END КНОПКА ЗАКРЫТИЯ КАРТОЧКИ С ТОВАРОМ ***************************************/

});
