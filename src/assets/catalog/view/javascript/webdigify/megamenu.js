$(document).ready(function() {
    $('.sub-menu-container').each(function() {
        var total_cols = 0;
        $(this).find('.sub-item2-content').each(function() {
            var cols = parseFloat($(this).data('cols'));
            if (total_cols == 0) {
                $(this).css('clear', 'left')
            }
            total_cols += cols;
            if (total_cols > 12) {
                $(this).css('clear', 'left');
                total_cols = cols
            }
            if (total_cols == 12) {
                total_cols = 0
            }
        })
    });
    $('.vertical-menu .wd-menu-bar').click(function() {
        var effect = $(this).closest('.wd-menu').find('.menu-effect').val();
        if (effect == "none") {
            $('.vertical-menu .ul-top-items').toggle()
        }
        if (effect == "fade") {
            $('.vertical-menu .ul-top-items').fadeToggle()
        }
        if (effect == "slide") {
            $('.vertical-menu .ul-top-items').slideToggle()
        }
    });
    $('.a-plus').click(function() {
        var effect = $(this).closest('.wd-menu').find('.menu-effect').val();
        if (effect == "none") {
            $('.li-plus').hide();
            $('.over').show()
        }
        if (effect == "fade") {
            $('.li-plus').fadeOut();
            $('.over').fadeIn()
        }
        if (effect == "slide") {
            $('.li-plus').slideUp();
            $('.over').slideDown()
        }
    });
    $('.a-minus').click(function() {
        var effect = $(this).closest('.wd-menu').find('.menu-effect').val();
        if (effect == "none") {
            $('.over').hide();
            $('.li-plus').show()
        }
        if (effect == "fade") {
            $('.over').fadeOut();
            $('.li-plus').fadeIn()
        }
        if (effect == "slide") {
            $('.over').slideUp();
            $('.li-plus').slideDown()
        }
    });

    $('.wd-menu .sub-menu-container').each(function() {
        var menu = $('.wd-menu').offset();
        var dropdown = $(this).parent().offset();
        var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('.wd-menu').outerWidth());
        if (i > 0) {
            $(this).css('margin-left', '-' + (i + 10) + 'px')
        }
    })
	
    $( ".li-top-item.mega-menu .div-product" ).parent().addClass("product-owl col-sm-4");

    var menuproduct = $('.li-top-item.mega-menu .product-owl').owlCarousel({
        items : 3, //1 items above 1000px browser width
        navigation : true,
		pagination : false,
		loop: true,
		autoplay:true,	
		rtl:false,
		itemsDesktop : [1500,2],
		itemsDesktopSmall:[1199,2],
		itemsTablet :	[991,3],
		itemsTabletSmall : [650, 3],
		itemsMobile: [575, 2]
    });
/* ---------------- start Templatetrip link more menu ----------------------*/
	
		$(document).ready(function() {
		$('.WD-panel-heading').click(function() {
		
		if($(this).hasClass('current-close')) {
		$(this).addClass("current-open");
		$(this).removeClass("current-close");
		$('.wd-menu ul.ul-top-items').slideToggle("2000");
		} else if($(this).hasClass('current-open')) {
		$(this).addClass("current-close");
		$(this).removeClass("current-open");
		$('.wd-menu ul.ul-top-items').slideToggle("2000");
		}
		
		if($(this).hasClass('default-open') && !$('.header .theme-full-container').hasClass('fixed')) {
		$(this).addClass("current-close");
		$(this).removeClass("default-open");
		$('.wd-menu ul.ul-top-items').slideToggle("2000");
		}	
		if($(this).hasClass('default-open') && $('.header .theme-full-container').hasClass('fixed')) {
		$(this).addClass("current-open");
		$(this).removeClass("default-open");
		$('.wd-menu ul.ul-top-items').slideDown("2000");
		}
		
		});
		});
		/* ---------------- End Templatetrip link more menu ----------------------*/
		
		/* ---------------- start Templatetrip more menu ----------------------
		function menuMaxItem() {
			if($(document).width() <= 1200){
			var max_elem = 4;
			} else if ($(document).width() >= 1700){
			var max_elem = 6;
			}
			var menu = $('.main-category-list .wd-menu  ul.ul-top-items > li');	
			if ( menu.length > max_elem ) {
			$('.main-category-list .wd-menu ul.ul-top-items').append('<li class="more"><div class="more-menu"><span class="categories">More</span></div></li>');
			}
			
			$('.main-category-list .wd-menu ul.ul-top-items .more-menu').click(function() {
			if ($(this).hasClass('active')) {
			menu.each(function(j) {
			if ( j >= max_elem ) {
			$(this).slideUp(200);
			}
			});
			$(this).removeClass('active');
			$('.more-menu').html('<span class="categories">More</span>');
			} else {
			menu.each(function(j) {
			if ( j >= max_elem  ) {
			$(this).slideDown(200);
			}
			});
			$(this).addClass('active');
			$('.more-menu').html('<span class="categories">Less</span>');
			}
			});
			
			menu.each(function(j) {
			if ( j >= max_elem ) { 
			$(this).css('display', 'none');
			}
			});
		}
		$(document).ready(function() {
		menuMaxItem();
		});
		$(window).resize(function() {
		//    menuMaxItem();
		
        });*/
        


        $(document).ready(function(){
            jQuery(function($){
            
            var max_elem = 5;
            
            if($(window).width() <1260){ max_elem = 4;}
            
            if($(window).width() <=1199){ max_elem = 4;}

            if($(window).width() <=991){ max_elem = 5;}
            
            var items = $('.cat-menu li.li-top-item');
            var surplus = items.slice(max_elem, items.length);
            surplus.wrapAll('<li class="li-top-item hiden_menu dropdown more_menu"><div class="dropdown-menu">');
                    $('.hiden_menu').prepend('<a href="#" class="level-top">More</a>');
            
            });
            });
		
		jQuery('.main-category-list .WD-panel-heading').click(function(event) {
			jQuery(this).toggleClass('active');
			jQuery("body").toggleClass("menu_hover");
			jQuery(".cat-menu").toggleClass("WDactive");
			event.stopPropagation();
			jQuery('#header-left .main-category-list .wd-menu-bar ul.ul-top-items').slideToggle("2000");
		});
		
/* ---------------- End Templatetrip more menu ----------------------*/
});

function menuToggle() {
    if ($(window).width() < 992) {
        $(".main-category-list ul.ul-top-items li.mega-menu .sub-menu-container").css('display', 'none');
        $(".main-category-list ul.ul-top-items li.mega-menu > i, .main-category-list ul.ul-top-items li.wd-sub-menu > i").remove();
        $(".main-category-list .WD-panel-heading").unbind("click");
        $('.main-category-list .WD-panel-heading').click(function() {
            $(this).parent().toggleClass('WDactive').find('ul.ul-top-items').slideToggle("fast")
        });
        $(".main-category-list ul.ul-top-items > li.mega-menu > a , .main-category-list ul.ul-top-items > li.wd-sub-menu > a").after("<i class='material-icons'></i>");
        $(".main-category-list ul.ul-top-items > li.li-top-item > i").unbind("click");
        $(".main-category-list ul.ul-top-items > li.li-top-item > i").click(function() {
            $(this).parent().toggleClass("active").find(".sub-menu-container").first().slideToggle()
        })
		// $('.header_top .theme-full-container #header-left').appendTo('.header_bottom .theme-full-container #header-left');
		// $('.header_bottom_cover .header_bottom .header-left .main-category-list').appendTo('.header .header_top .theme-full-container #header-left');
    } else {
		// $('.header .header_bottom_cover .header_bottom .header-left #header-left').appendTo('.header .header_top .theme-full-container');
		// $('.header .header_top .theme-full-container .main-category-list').appendTo('.header .header_bottom_cover .header_bottom');
        $(".main-category-list ul.ul-top-items li.mega-menu .sub-menu-container").css('display', 'block');
        $(".main-category-list ul.ul-top-items li.li-top-item > i").unbind("click");
        $(".main-category-list ul.ul-top-items li.li-top-item > i").removeClass("active")
    }
}
$(document).ready(function() {
    menuToggle()    
});
$(window).resize(function() {
    menuToggle()
})