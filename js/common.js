$(function() {
    
    var wh = $(window).outerHeight();
   
   
    $(window).scroll(function(){
   var st = $(this).scrollTop();     
   var top_menu = $('.top_menu'),
   wrap_top_menu = $('.wrap_top_menu'),
   block_1 = $('.block_1'),
   wrap_block_1 = $('.wrap_block_1'),
   auth_reg_block = $('.auth_reg_block'),
   backout = $('.backout'),
   gray_block = $('.gray_block'),
   wrap_gray_block = $('.wrap_gray_block'),
   menu_mobile_phone = $('.menu_mobile_phone'),
   wrapper_full = $('.wrapper.full');
   
   var scroll = $(window).scrollTop();


  
  /* block_1 start*/
    if (scroll >= top_menu.outerHeight()) {
      top_menu.addClass('fixed');
      wrap_block_1.addClass('fixed');
      auth_reg_block.addClass('fixed');
      backout.addClass('fixed');
      wrap_gray_block.addClass('fixed');
     // wrapper_full.css('padding-top', wrapper_full.outerHeight() + block_1.outerHeight() + gray_block.outerHeight()  + 'px');
      wrapper_full.addClass('step_1');
  }
  else {
      top_menu.removeClass('fixed');
      wrap_block_1.removeClass('fixed');
      auth_reg_block.removeClass('fixed'); 
      backout.removeClass('fixed'); 
      wrap_gray_block.removeClass('fixed');
     // wrapper_full.css('padding-top', 0 + 'px' );
      wrapper_full.removeClass('step_1');
  }
   /* block_1 end */
  
  
});
  
  
 
  

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
    $('.mega_menu > li > ul .width_1').css('height',$(window).outerHeight() - 100 + 'px');

  if($(window).outerWidth() >= 950 && $(window).outerHeight() <=600 ) {
     $('.mega_menu > li > ul .width_1').css('height',$(window).outerHeight() - 100 + 'px');
  }
  
  if($(window).outerWidth() >= 950 && $(window).outerHeight() >=600 ) {
      $('.mega_menu > li > ul .width_1').css('height','auto'); 
  }
  
    
  
});


$(window).resize(function(){
      $('.mega_menu > li > ul .width_1').css('height',$(window).outerHeight() - 100 + 'px');

     if($(window).outerWidth() >= 950 && $(window).outerHeight() <=600 ) {
     $('.mega_menu > li > ul .width_1').css('height',$(window).outerHeight() - 100 + 'px');
  }
  
  if($(window).outerWidth() >= 950 && $(window).outerHeight() >=600 ) {
      $('.mega_menu > li > ul .width_1').css('height','auto'); 
  }
  
});

  
  /**/


    
      
     
     
    
    
    $(".radio_number input[type='radio']").click(function()
{
  var previousValue = $(this).attr('previousValue');
  var name = $(this).attr('name');

  if (previousValue == 'checked')
  {
    $(this).removeAttr('checked');
    $(this).attr('previousValue', false);
  }
  else
  {
    $(".radio_number  input[name="+name+"]:radio").attr('previousValue', false);
    $(this).attr('previousValue', 'checked');
  }
    });


    

	// styler
	$('select').styler();
	
	// datepicker
     
	$( "#datepicker" ).datepicker({
        	
         beforeShow : function(){
           if(!$('.datepicker_wrapper').length){
                  $('#ui-datepicker-div').wrap('<span class="datepicker_wrapper"></span>');
            }
            $('.label_datepicker').addClass('cselect'); 
        },        
     
         onClose: function (dateText, inst) {
        var date = $(this).val();
        $("#datepicker").val(date.toString());
        $('.label_datepicker').removeClass('cselect');     
        }
	}).datepicker("setDate", new Date());
	
	
    // search

        
        var searchBox = function(direction) {
       
       // Set the effect type
    var effect = 'slide';

    // Set the options for the effect type chosen
    var options = { direction: direction };

    // Set the duration (default: 400 milliseconds)
    var duration = 400;

    $('.search_block').toggle(effect, options, duration);
    $('.search_block').toggleClass('show_search_block');
	
        }

        $('.js_search_button').click(function() {
            
  
            
         
           if(!$('.search_block').hasClass('show_search_block')) {
               searchBox('right')
          }   
        });
        
        $(document).mouseup(function (e) {
                
        var container = $(".search_block, .search_btn");
       
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
        if($('.search_block').hasClass('show_search_block')) {
             searchBox('left')
          }   

        }
    });
     
	
        // search end
        
	// slick
	$('.js_slick_slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 4,
  		slidesToScroll: 1,
                adaptiveHeight: true,
                
		responsive: [
			{
				breakpoint: 1439,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
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
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 640,
				settings: {
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 3,
					verticalSwiping: false,
					vertical: true
					
				}
			}
		]
	});
        
     	$('.mp_items_out.one .double_prev').click(function(){
    $('.mp_items_out.one .js_slick_slider').slick('slickPrev');
	return false;
	});
	$('.mp_items_out.one .double_next').click(function(){
    $('.mp_items_out.one .js_slick_slider').slick('slickNext');
	return false;
	});
        
        $('.mp_items_out.two .double_prev').click(function(){
    $('.mp_items_out.two .js_slick_slider').slick('slickPrev');
	return false;
	});
	$('.mp_items_out.two .double_next').click(function(){
    $('.mp_items_out.two .js_slick_slider').slick('slickNext');
	return false;
	});
        
	
	//#start сообщения внизу страницы
        
        var mesBox = function() {
             $('.message_send_block').each(function() {
            $(this).css({'bottom': '-'+$(this).outerHeight()+'px'} );
            
            
              if($(this).outerHeight() >= $(window).height()) {
                $(this).addClass('scroll');
                } else {
                $(this).removeClass('scroll');  
                }
   
        })
            
        };
        
        var closeMesBox = function() {
            
                 $('.message_send_block').each(function() {
            var mh = $(this).outerHeight();
            $(this).animate({'bottom': '-'+mh+'px'} ,{
                complete:function() {
                $('.fixed_btn a').show()    
                }
            }, 300 );
           
   
        })

            
        }
        
       mesBox(); 
        
        $(window).on('resize', function() {
            
             $('.message_send_block').each(function() {
               if($(this).outerHeight() >= $(window).height()) {
                $(this).addClass('scroll');
                } else {
                $(this).removeClass('scroll');  
                }
        }) 
                   
        })
	
	$('.js_message').on('click',function(){
		$('.js_message').css('display', 'block');
		$(this).css('display', 'none');
                var elem = $(this).attr('href');
                var mesb = $('#message_send_block').outerHeight();
                var sb = $('#subscribe_block').outerHeight();
                if(elem == '#subscribe_block') {
       		$('#message_send_block').animate({bottom:'-'+mesb+'px'} , 500);
                }
                if(elem == '#message_send_block') {
       		$('#subscribe_block').animate({bottom:'-'+sb+'px'} , 500);
                }
		$(elem).show().animate({bottom:'0'},500);
                
		return false;
	});
	
	$('.message_close').on('click', function(){
		$('.js_message').css('display', 'block');
                var hpar =  $(this).parent().outerHeight(); 
		$(this).parent().animate({bottom:'-'+hpar+'px'},300);
	});
        
        
        
          $(document).mouseup(function (e)
    {
        var container = $('.message_send_block, .fixed_btn ');

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            
       closeMesBox()
           
        } 
    }); 
    
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
       closeMesBox()  
       }
   });
    
    //end #########сообщения внизу страницы
	
	// кнопка фильтра
	
	$('.show_hide_filtr').click(function() {
		$('.gray_block').slideToggle(function() {
			if($(this).is(":hidden")) {
				$('.show_hide_filtr').text('Показать фильтр');
			}
			if($(this).is(":visible")) {
				$('.show_hide_filtr').text('Скрыть фильтр');
			}
		});
		
	});
        
            $(document).mouseup(function (e)
    {
        var container = $(".gray_block, .show_hide_filtr, .mega_menu > li, .datepicker_wrapper ");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            
            if($('.show_hide_filtr').is(':visible')) {
                $('.gray_block').slideUp();
            $('.show_hide_filtr').text('Показать фильтр'); 
                    }
           
           
        }
    });
	
	
	// высота блока
	

        
        /*****start*** */
         $('.link_1').on('click',function() {
              $('.auth_reg_block').slideDown();
              var h_block_2 = $('.auth_reg_block').innerHeight();
             return false;
          })
          
          $('.auth_reg_block .btn_1.show_640').on('click',function() {
              $(".auth_reg_block").slideUp()
          })
              $(document).mouseup(function (e)
    {
        var container = $(".auth_reg_block");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.slideUp();
        }
    });
    
       $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
        $(".auth_reg_block").slideUp();
       }
   });
    /****end**** */

	
        
	setTimeout(function() {
		$('.gray_select_style.width_4.jq-selectbox').change(function() {
			var zz = $(this).find('.jq-selectbox__select-text').text();
			$(this).find('.jq-selectbox__select').attr("id", zz);
			$('.gray_select_style.width_4 .jq-selectbox__select-text').text('Цвет')
		});     
	},100);
        
        $('.gray_select_style.width_4 .jq-selectbox__select-text').text('Цвет')
        $('.gray_select_style.width_4 ul li').each(function(i) {
		$(this).attr('class', 'inc_' + i )    
         	//console.log(i)
		});   
       
       
       
       
       //.mega_menu  
       var dtclick = function() {
           
           
       
       if ($('.mega_menu  .tab-content').css('z-index') == '2') {
           
       
       	$('.mega_menu > li > a').unbind('click').bind('click',function(){
               
		var tab_id = $(this).parent().attr('data-tab');
               

		$('.mega_menu > li').not($(this).parent()).removeClass('current');
		$('.mega_menu > li > ul').not($("#"+tab_id)).removeClass('current');

		$(this).parent().toggleClass('current');
		$("#"+tab_id).toggleClass('current');
                
                return false;
	})
        
        
            	$('.mega_menu > li > ul .h3').unbind('click').bind('click',function(){
               
		var tbt_id = $(this).attr('data-tbt');

		$('.mega_menu__column ul').not($("#"+tbt_id)).removeClass('tbtcur');
		$('.mega_menu > li > ul .h3').not($(this)).removeClass('tbtcur');

		$("#"+tbt_id).toggleClass('tbtcur');
                $(this).toggleClass('tbtcur');  
                
                return false;
                })
                } else {
                    
                  $('.mega_menu > li .tab-content').removeClass('current');  
                  $('.mega_menu > li').removeClass('current')
                } 
                
          }
          
          dtclick();
          $(window).on('resize',function() {
		dtclick();
	}) ;
        
        
        
        var tzC =  function() {
            if($('.menu_mobile_phone').css('z-index') == '299') {
            $('.phone_number').click(function() {
                
             // $('.menu_mobile_phone').toggleClass('vibible');
             $('.menu_mobile_phone').stop().slideToggle()
              
            })
        }
            }
         tzC();
        
         
         
          $(document).mouseup(function (e)
    {
        var container = $(".menu_mobile_phone, .phone_number");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.removeClass('vibible');
            $('.menu_mobile_phone').slideUp()
        }
    });
    
    
          $(document).mouseup(function (e)
    {
        var container = $(".mega_menu > li");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.removeClass('current');
            $('.mega_menu  .tab-content').removeClass('current');
        }
    });
    
    
     // mask
    $('.for_mask').mask('+7 (000) 000-00-00');
         
     
    
    $(".link_personal").on('click',function(){
  $(this).next(".personal_menu").slideToggle();
  $('#basket_tmd').slideUp();
  return false;
});
$(".link_basket_tmd").click(function(){   
  $(this).next("#basket_tmd").slideToggle();
  $('.personal_menu').slideUp();
   return false;
});

jQuery(function($){
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var box = $(".personal_menu, .basket_name"); // тут указываем ID элемента
    if (!box.is(e.target) // если клик был не по нашему блоку
        && box.has(e.target).length === 0) { // и не по его дочерним элементам
      $(".personal_menu").slideUp(); // скрываем его

    }
  });
})

jQuery(function($){
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var box = $("#basket_tmd, .link_basket_tmd"); // тут указываем ID элемента
    if (!box.is(e.target) // если клик был не по нашему блоку
        && box.has(e.target).length === 0) { // и не по его дочерним элементам
      $("#basket_tmd").slideUp(); // скрываем его

    }
  });
})
        
 

        
               

});





