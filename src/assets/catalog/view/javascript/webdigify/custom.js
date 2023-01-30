var widthClassOptions = [];
var widthClassOptions = ({
		bestseller       : 'bestseller_default_width',		
		featured         : 'featured_default_width',
		special          : 'special_default_width',
		latest           : 'latest_default_width',
		related          : 'related_default_width',
		additional       : 'additional_default_width',
		tabbestseller       : 'tabbestseller_default_width',		
		tabfeatured         : 'tabfeatured_default_width',
		tabspecial          : 'tabspecial_default_width',
		tablatest           : 'tablatest_default_width',
		related          : 'related_default_width',
		additional       : 'additional_default_width',
		module           : 'module_default_width',
		blog         	 : 'blog_default_width',
		testimonial		 :'testimonial_default_width',
		productcategory0       : 'productcategory0_default_width',
		productcategory1       : 'productcategory1_default_width',
		productcategory2       : 'productcategory2_default_width',
		productcategory3       : 'productcategory3_default_width'
});


/* ----------- Start Page-loader ----------- */
$(window).load(function() {
    $(".wdloading-bg").fadeOut("slow");
})
/* ----------- End Page-loader ----------- */

	/* ----------- Start flexslider ----------- */
	$(window).load(function() {
		if($('.flexslider').length > 0){ 
			$('.flexslider').flexslider({	
				slideshowSpeed: $('.flexslider').data('interval'),
				pauseOnHover: $('.flexslider').data('pause'),
				animation: "fade"
			});
		}
	});
	/* ----------- End flexslider ----------- */
	$(document).ready(function(){
		$('.category_list_carousel').owlCarousel({
				items: 9,
				autoPlay: true,
				singleItem: false,
				navigation: true,
				navigationText: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
				pagination: false,
				itemsDesktop : [1400,7],
				itemsDesktopSmall:[1199,6],
				itemsTablet :	[991,5],
				itemsTabletSmall : [767, 4],
				itemsMobile: [479, 3]
			});
			$('#content .image-additional img').on('click',function(event) {
				var img_wrap = $(this).closest( ".countdown-images" );
				$(img_wrap).find('.special-image img').attr('src',$(event.target).data('image-large-src'));
				$('.selected').removeClass('selected');
				$(event.target).addClass('selected');
				$(img_wrap).find('.product-image img').prop('src', $(event.currentTarget).data('image-large-src'));
		  });
		});	

$(document).ready(function(){
	
	$('.box.bestseller').appendTo('.box.special .right-part');
	$('#searchbox select[name=\'category_id\']').click(function(){
	$(this).toggleClass('active');
	});

	$('.map_button').click(function(){
		$(".information-contact .panel").slideToggle("slow");
	});

	if ($(window).width() <= 767) {
	$('.top-links-toggle').click(function(){
		$(".top-links").slideToggle("slow");
	});}

	/*$('.image').each(function(){  						   
			$(this).hoverdir();   
		});
	/*bx slider for vertical blog */
	$('#content select, .header-search select').customSelect();	
	$('ul.breadcrumb').prependTo('.content-top-breadcum .container');
	$('#content h1').prependTo('.row .page-title');
	$('#content h2').prependTo('.row .page-title');
	
	
	$("#cart .dropdown-toggle").click(function(){
            $(this).toggleClass("active");
			$(".cart-menu").slideToggle("slow");
			$(".myaccount-menu").slideUp("slow");
            $(".myaccount .dropdown-toggle").removeClass('active');
			$(".menu_toggle").slideUp("slow");
        	return false;
    });
		
	$("#form-currency .dropdown-toggle").click(function() {
        $('#form-currency').toggleClass("active");
        $(".language-menu").slideUp("slow");
        $(".currency-menu").slideToggle("slow");
        $(".cart-menu").slideUp("slow");
        $(".menu_toggle").slideUp("slow");
        return false;
    });
    $("#form-language .dropdown-toggle").click(function() {
        $('#form-language').toggleClass("active");
        $(".currency-menu").slideUp("slow");
        $(".language-menu").slideToggle("slow");
        $(".cart-menu").slideUp("slow");
        $(".menu_toggle").slideUp("slow");
        return false;
    });
	

    $('#search .search_button').click(function(event){			
		$(this).toggleClass('active');		
		event.stopPropagation();		
		$('#search .search_toggle').toggle('medium');		
		$( "#search .search_toggle form input[type=text]" ).focus();
	
	});
	$("#search .search_toggle").on("click", function (event) {
		event.stopPropagation();	
	});

	

	


	if ($(window).width() <= 991){
		//Append land-curr in My Account
		$('.header_nav .lang-curr-wrapper').appendTo('.nav2 .account .dropdown.myaccount .drop_account');  
	}	
	$(".myaccount > .dropdown-toggle").click(function(){          
			$(".cart-menu").slideUp("slow");
			$(".myaccount-menu").slideToggle("slow");
 			$(this).toggleClass("active");	
			 $('.dropdown.myaccount .lang-curr-wrapper').toggleClass("active");	
			$("#cart .dropdown-toggle").removeClass('active');
			$(".menu_toggle").slideUp("slow");
        	return false;
    });
});

$(document).click(function(){
	$(".cart-menu").slideUp('slow');
	$(".myaccount-menu").slideUp('slow');
	$(".language-menu").slideUp("slow");
	$(".currency-menu").slideUp("slow");
});

jQuery(document).ready(function(){	
$('.write-review, .review-count').on('click', function() {
$('html, body').animate({scrollTop: $('#tabs_info').offset().top}, 'slow');
});

});


/* JS FOR FILTER */

function leftFilter(){
if ($(window).width() <= 767) {
$('#column-left .filterbox').appendTo('.row #content .category_list');
$('#column-right .filterbox').appendTo('.row #content .category_list');
} else {
$('.row #content .category_list .filterbox').appendTo('#column-left .sidebarFilter');
$('.row #content .category_list .filterbox').appendTo('#column-right .sidebarFilter');
}
}
$(document).ready(function(){leftFilter();});
$(window).resize(function(){leftFilter();});
/*****************start animation script*******************/
function hb_animated_contents() {
	$(".hb-animate-element:in-viewport").each(function (i) {
	var $this = $(this);
	if (!$this.hasClass('hb-in-viewport')) {
		setTimeout(function () {
			$this.addClass('hb-in-viewport');
			}, 180 * i);
			}
		});
}
	
	$(window).scroll(function () {
		hb_animated_contents();
	});
	$(window).load(function () {
		hb_animated_contents();
	});

/*****************end animation script*******************/
function mobileToggleMenu(){
	if ($(window).width() < 992)
	{
		$('.nav.navbar-nav').css('display','none');
		$("#footer .mobile_togglemenu").remove();
		$("#footer .column h5").append( "<a class='mobile_togglemenu'>&nbsp;</a>" );
		$("#footer .column h5").addClass('toggle');
		$("#footer .column h6").append( "<a class='mobile_togglemenu'>&nbsp;</a>" );
		$("#footer .column h6").addClass('toggle');
		$("#footer .mobile_togglemenu").click(function(){
			$(this).parent().toggleClass('active').parent().find('ul').toggle('slow');
		});

	}else{
		$('.nav-responsive').css('display','none');
		$('.nav.navbar-nav').css('display','block');
		$("#footer .column h5").parent().find('ul').removeAttr('style');
		$("#footer .column h5").parent().find('.owl-wrapper-outer').removeAttr('style');
		$("#footer .column h5").removeClass('active');
		$("#footer .column h5").removeClass('toggle');
		$("#footer .column h6").parent().find('ul').removeAttr('style');
		$("#footer .column h6").removeClass('active');
		$("#footer .column h6").removeClass('toggle');
		$("#footer .mobile_togglemenu").remove();
	}	

}
$(document).ready(function(){mobileToggleMenu();});
$(window).resize(function(){mobileToggleMenu();});

$(document).ready(function(){
  $(".dropdown-toggle").click(function(){
    $("ul.dropdown-toggle").toggle('slow');
  });
});

function LangCurDropDown(selector,subsel){
	var main_block = new HoverWatcher(selector);
	var sub_ul = new HoverWatcher(subsel);
	$(selector).click(function() {
		$(selector).addClass('active');
		$(subsel).slideToggle('slow');
		setTimeout(function() {
			if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
				$(subsel).stop(true, true).slideUp(450);
				$(selector).removeClass('active');
		}, 3000);
	});
	
	$(subsel).hover(function() {
		setTimeout(function() {
			if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
				$(subsel).stop(true, true).slideUp(450);
		}, 3000);
	});	
}

function leftright()
{
	if ($(window).width() < 980){
			if($('.category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1').hasClass('text-right')==true){
			$(".category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1").addClass('text-left');
			$(".category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1").removeClass('text-right');
			}
	}
}

$(document).ready(function(){leftright();});
$(window).resize(function(){leftright();});

if (jQuery(window).width() >= 992) {
	var prevScrollpos = window.pageYOffset;
	
	jQuery(window).scroll(function () {
	if (jQuery(this).scrollTop() > 246) {
	
		jQuery('#header_top').addClass('fixed');
		} else {
		jQuery('#header_top').removeClass('fixed');
	
	}
	
	});
	
	window.onscroll = function() {
	
	
	var currentScrollPos = window.pageYOffset;
	
	  if (prevScrollpos > currentScrollPos) {  
	document.getElementById("header_top").style.top = '0';
	  } else {
	document.getElementById("header_top").style.top = '-121px';	
	  }
	  prevScrollpos = currentScrollPos;
	}
	
	}

/*end fied*/

//LEFT-RIGHT COLUMN RESPONSIVE TOOGLE

function mobileToggleColumn(){
	if ($(window).width() < 992)
	{
		$('#column-left,#column-right').appendTo('.home_row');
		$('#column-left,#column-right').insertAfter('#content');
		$("#column-left .box-heading .mobile_togglemenu,#column-right .box-heading .mobile_togglemenu").remove();
		$("#column-left .box-heading,#column-right .box-heading").append( "<a class='mobile_togglemenu'>&nbsp;</a>" );
		$("#column-left .box-heading,#column-right .box-heading").addClass('toggle');
		$("#column-left .box-heading .mobile_togglemenu,#column-right .box-heading .mobile_togglemenu").click(function(){
			$(this).parent().toggleClass('active').parent().find('.box-content,.filterbox,.list-group').slideToggle('slow');
		});
	}else{
		$('#column-left').prependTo('.home_row');
		$('#column-right').appendTo('.home_row');
		$('#column-left').insertBefore('#content');
		$('#column-right').insertAfter('#content');
		$('.common-home #column-left,.common-home #column-right').insertBefore('#content-top');
		$("#column-left .box-heading,#column-right .box-heading").parent().find('.box-content,.filterbox,.list-group').removeAttr('style');
		$("#column-left .box-heading,#column-right .box-heading").removeClass('active');
		$("#column-left .box-heading,#column-right .box-heading").removeClass('toggle');
		$("#column-left .box-heading .mobile_togglemenu,#column-right .box-heading .mobile_togglemenu").remove();
	}
}
$(document).ready(function(){mobileToggleColumn();});
$(window).resize(function(){mobileToggleColumn();});

function productCarouselAutoSet() { 
	$("#content .product-carousel, .banners-slider-carousel .product-carousel, .testimonial-area #testimonial-carousel, #products-related .product-carousel").each(function() {
		var objectID = $(this).attr('id');
		var myObject = objectID.replace('-carousel','');
		if(myObject.indexOf("-") >= 0)
			myObject = myObject.substring(0,myObject.indexOf("-"));		
		if(widthClassOptions[myObject])
			var myDefClass = widthClassOptions[myObject];
		else
			var myDefClass= 'grid_default_width';
		var slider = $("#content #" + objectID + ", .banners-slider-carousel #"+ objectID + ", .testimonial-area #"+ objectID + ", #products-related #"+ objectID);
		slider.sliderCarousel({
			defWidthClss : myDefClass,
			subElement   : '.slider-item',
			subClass     : 'product-block',
			firstClass   : 'first_item_wd',
			lastClass    : 'last_item_wd',
			slideSpeed : 200,
			paginationSpeed : 800,
			autoPlay : false,
			stopOnHover : false,
			goToFirst : true,
			goToFirstSpeed : 1000,
			goToFirstNav : true,
			pagination : true,
			paginationNumbers: false,
			responsive: true,
			responsiveRefreshRate : 200,
			baseClass : "slider-carousel",
			theme : "slider-theme",
			autoHeight : true
		});
		
		var nextButton = $(this).parent().find('.next');
		var prevButton = $(this).parent().find('.prev');
		nextButton.click(function(){
			slider.trigger('slider.next');
		})
		prevButton.click(function(){
			slider.trigger('slider.prev');
		})
	});
}
//$(window).load(function(){productCarouselAutoSet();});
$(document).ready(function(){productCarouselAutoSet();});

	//stock bar
	function ProductQuantityBar() {
		jQuery('.product-thumb').each(function(){
		var $desc = jQuery(this).find('.product-details #quantity_bar .progress');
		var $qty = jQuery(this).find('.counter');
		var $pbar = jQuery(this).find('.progress-bar');
		var $progress = $desc;
		var $progressBar = $pbar;
		var $quantity = $qty.html();
		var currentWidth = parseInt($progressBar.css('width'));
		var allowedWidth = parseInt($progress.css('width'));
		var addedWidth = currentWidth + parseInt($quantity);
		if (addedWidth > allowedWidth) {
		addedWidth = allowedWidth;
		}
		var progress = (addedWidth / allowedWidth) * 100;
		$progressBar.animate({width: progress + '%' }, 100);
		});
		}
		jQuery(document).ready(function() {	ProductQuantityBar(); });
		jQuery( window ).load( function() { ProductQuantityBar(); });


function productListAutoSet() { 
	$("#content .productbox-grid").each(function(){
		var objectID = $(this).attr('id');
		if(objectID.length >0){
			if(widthClassOptions[objectID.replace('-grid','')])
				var myDefClass= widthClassOptions[objectID.replace('-grid','')];
		}else{
			var myDefClass= 'grid_default_width';
		}	
		$(this).smartColumnsRows({
			defWidthClss : myDefClass,
			subElement   : '.product-items',
			subClass     : 'product-block'
		});
	});		
}
$(window).load(function(){productListAutoSet();});
$(window).resize(function(){productListAutoSet();});


function productListAutoSethometab() { 
	$("#content .hometab .productbox-grid-hometab").each(function(){
		var objectID = $(this).attr('id');
		if(objectID.length >0){
			if(widthClassOptions[objectID.replace('-grid','')])
				var myDefClass= widthClassOptions[objectID.replace('-grid','')];
		}else{
			var myDefClass= 'grid_default_width';
		}	
		$(this).smartColumnsRows({
			defWidthClss : myDefClass,
			subElement   : '.product-items',
			subClass     : 'product-block'
		});
	});		
}
$(window).load(function(){productListAutoSethometab();});
$(window).resize(function(){productListAutoSethometab();});

function HoverWatcher(selector){
	this.hovering = false;
	var self = this;

	this.isHoveringOver = function() {
		return self.hovering;
	}

	$(selector).hover(function() {
		self.hovering = true;
	}, function() {
		self.hovering = false;
	})
}

function LangCurDropDown(selector,subsel){
	var main_block = new HoverWatcher(selector);
	var sub_ul = new HoverWatcher(subsel);
	$(selector).click(function() {
		$(selector).addClass('active');
		$(subsel).slideToggle('slow');
		setTimeout(function() {
			if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
				$(subsel).stop(true, true).slideUp(450);
				$(selector).removeClass('active');
		}, 3000);
	});
	
	$(subsel).hover(function() {
		setTimeout(function() {
			if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
				$(subsel).stop(true, true).slideUp(450);
		}, 3000);
	});	
}


$(document).ready(function(){

	LangCurDropDown('#currency','.currency_div');
	LangCurDropDown('#language','.language_div');

	
	$('.nav-responsive').click(function() {
        $('.responsive-menu .nav.navbar-nav').slideToggle();
		$('.nav-responsive div').toggleClass('active');
		
    }); 

	$(".treeview-list").treeview({
		animated: "slow",
		collapsed: true,
		unique: true		
	});
	$('.treeview-list a.active').parent().removeClass('expandable');
	$('.treeview-list a.active').parent().addClass('collapsable');
	$('.treeview-list .collapsable ul').css('display','block');


	
});


function menuResponsive(){
	 
	//alert($(window).width());
	if ($(window).width() < 992)
	{
		$('.nav.navbar-nav').css('display','none');
		$('#menu').css('display','block');
		$("#menu").addClass('responsive-menu');
		$("#menu").removeClass('main-menu');
		$('.nav-responsive').css('display','block');
		$("#menu .mobile_togglemenu").remove();
		$("#menu ul li.dropdown").append( "<a class='mobile_togglemenu'>&nbsp;</a>" );
		$("#menu ul li.dropdown").addClass('toggle'); 
		$('#res-menu .main-navigation').append($('#static-menu .toplink').removeClass('.toplink'));
		
		$("#menu .nav > li.dropdown .mobile_togglemenu").click(function(){
			 $(this).parent().toggleClass('active');
			 $(this).siblings("li .dropdown-menu").slideToggle('slow');
		});
		$('.header_nav .left-nav .lang-curr-wrapper').appendTo('.header_nav .nav2 .account .drop_account');
		$('.header_nav .nav2 .compare').insertAfter('.header_nav .nav2 .account .drop_account .whishlist');
		$('.header_nav .nav2').insertBefore('.header_top .header_search');
	}else{
		$('#menu').css('display','block');
		$("#menu").addClass('main-menu');
		$("#menu").removeClass('responsive-menu');
		$("#menu ul li.dropdown").parent().find('li .dropdown-menu').removeAttr('style');
		$("#menu ul li.dropdown").removeClass('active');
		$("#menu ul li.dropdown").removeClass('toggle');
		$("#menu .mobile_togglemenu").remove();
		$('.nav-responsive').css('display','none');
		$('.nav.navbar-nav').css('display','block');
		$('#static-menu').append($('#res-menu .main-navigation .toplink').removeClass('.toplink'));
		$('.header_top .nav2').appendTo('.header_nav .right-nav');
		$('.header_nav .nav2 .account .drop_account .lang-curr-wrapper').insertBefore('.header_nav .left-nav #header-nav-left');
		$('.header_nav .nav2 .account .drop_account .compare').insertAfter('.header_nav .nav2 .account');
//$('.lang-curr-wrapper').appendTo('.nav2')
	}	

	/***** Append Right Banner CMs Block from content_bottom position to Product Detail Right ****/
	$('#product-product #wdcmsrightbanner').appendTo('.product-detail-right');
	$('#product-product #wdcmsrightservices').appendTo('.product-detail-right');

	if ($(window).width() < 992)
	{
		$('.headertop').insertBefore('.header_top .container-fluid .row .nav2');
	}
	else{
		$('.header_top .container-fluid .row .headertop').insertBefore('.header_top .container-fluid .row .col-sm-4.header-logo');
	}
	
}
$(document).ready(function(){menuResponsive();});
$(window).resize(function(){menuResponsive();});
 
 
$(document).ready(function(){
  $(".tm_headerlinks_inner").click(function(){
    $(".header_links").toggle('slow');
  });
  
});


function Search_Res() {	
	 if (jQuery(window).width() < 480){
		 
		 
		 $('#searchbox').appendTo('.header-search');
	 
      $(".search").click(function() {
			$('#searchbox').slideToggle('slow', function() {
			});
			$('#searchbox .input-lg').attr('autofocus', 'autofocus').focus();
			$('.search').toggleClass('active');
	});
 } 
 
 
 else{  $('#searchbox').appendTo('.searchtoggle'); }
 
}
 
$(document).ready(function(){Search_Res();});
$(window).resize(function() {Search_Res();});




// More menu
$(document).ready(function(){
jQuery(function($){

var max_elem = 5;

if($(window).width() <1260){ max_elem = 5;}

if($(window).width() <=1199){ max_elem = 5;}

var items = $('#menu li.top_level');
var surplus = items.slice(max_elem, items.length);
surplus.wrapAll('<li class="top_level hiden_menu dropdown more_menu"><div class="dropdown-menu">');
		$('.hiden_menu').prepend('<a href="#" class="level-top">More</a>');


});
});


/*More Category
$(document).ready(function(){					   
	if ($(window).width() > 979) {
	jQuery(function($){
		var max_elem = 10 ;
		var items = $('.box-content-category #nav-one li.top_level');
		var surplus = items.slice(max_elem, items.length);
		surplus.wrapAll('<li class="main hiden_menu"><ul class="dropdown-inner">');
		$('.hiden_menu').append('<span class="main">More</span>');	
	$('.hiden_menu .main').click(function(){
    var $this = $(this);
    $this.toggleClass('active');
    if($this.hasClass('active')){
        $this.text('Less');         
    } else {
        $this.text('More');
    }	
	$(".hiden_menu .dropdown-inner").slideToggle(800); });
	
	});
	}

});*/

/*For Grid and List View Buttons*/
function gridlistactive(){		
$('.btn-list-grid button').on('click', function() {
if($(this).hasClass('grid')) {
  $('.btn-list-grid button').addClass('active');
  $('.btn-list-grid button.list').removeClass('active');
}
  else if($(this).hasClass('list')) {
$('.btn-list-grid button').addClass('active');
  $('.btn-list-grid button.grid').removeClass('active');
  }
});
}
$(document).ready(function(){gridlistactive()});
$(window).resize(function(){gridlistactive()});

/*For Back to Top button*/
$(document).ready(function(){
$("body").append("<a class='top_button' title='Back To Top' href=''>TOP</a>");

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 70) {
			$('.top_button').fadeIn();
		} else {
			$('.top_button').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('.top_button').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});

$(".ttpopupclose").click(function() {
	$("#dialog").removeClass("in");
	$("#dialog").css('display', 'none');
	$(".b-modal.__b-popup1__").remove();
	$(".newletter-popup").css('display', 'none');
});
});

$(document).ready(function(){
	$(".box-category-top").click(function(){
    $('.box-category-top').toggleClass('active');
	$(".box-content-category").slideToggle(800);
	});
});


function searchtoggle() {	
	 if ($(window).width() < 980){ 
      $(".search").click(function() {
			$('#searchbox').slideToggle('slow', function() {
			});
			$('#searchbox .input-lg').attr('autofocus', 'autofocus').focus();
			$('.search').toggleClass('active');
			 event.stopPropagation();
	});
 } 
 else{  
 		$('#searchbox').appendTo('.searchtoggle');
	}
 
}

$(document).ready(function(){searchtoggle();});
$(window).resize(function(){searchtoggle();});




// Countdown
function timecounter() {
	$('.countbox.hastime').each(function(){
		var countTime = $(this).attr('data-countdown');
		//console.log(countTime);

		$(this).countdown(countTime, function(event) {
			$(this).html(
				'<span class="timebox day"><span class="timebox-inner"><strong>'+event.strftime('%D')+'</strong><span class="time day">days</span></span></span><span class="timebox hour"><span class="timebox-inner"><strong>'+event.strftime('%H')+'</strong><span class="time hour">h</span></span></span><span class="timebox minute"><span class="timebox-inner"><strong>'+event.strftime('%M')+'</strong><span class="time min">m</span></span></span><span class="timebox second"><span class="timebox-inner"><strong>'+event.strftime('%S')+'</strong><span class="time sec">s</span></span></span>'
			);
		});
		// $(this).countdown('stop');
	});
}
$(window).load(function() {
    timecounter()
});
$(window).resize(function() {
    timecounter()
});	  


$(function(){
	var speed = 600;
	
	$('.special-additional-images').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		vertical: true,
		verticalSwiping: true
	});
	
	$('.product-block-inner').mouseover(function() {
			$('.special-additional-images').slick('play')
		});
		$('.product-block-inner').mouseout(function() {
			$('.special-additional-images').slick('pause')
		});

	})
