

  $(window).load(function () {
    $('#slideshow0').swiper({
      mode: 'horizontal',
      slidesPerView: 1,
      pagination: '.slideshow0',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 0,
      autoplay: 5500,
      autoplayDisableOnInteraction: true,
      loop: true,
      effect: 'fade'
    });
  });



  // Can also be used with $(document).ready()
  // $(window).load(function () {
  //   $("#spinner").fadeOut("slow");
  // });



 type="text/javascript">
  $('#tabs a').tabs();


type="text/javascript">

  $(document).ready(function () {
    $('.specialcarousel').owlCarousel({
      items: 1,
      singleItem: false,
      navigation: false,
      pagination: false,
      itemsDesktop: [1499, 1],
      itemsDesktopSmall: [1199, 1],
      itemsTablet: [991, 2],
      itemsTabletSmall: [640, 1],
      itemsMobile: [543, 1]
    });
    // Custom Navigation Events
    $(".wdspecial_next").click(function () {
      $('.specialcarousel').trigger('owl.next');
    })
    $(".wdspecial_prev").click(function () {
      $('.specialcarousel').trigger('owl.prev');
    });
  });


 type="text/javascript">

  $(document).ready(function () {
    $('.bestsellercarousel').owlCarousel({
      items: 2,
      singleItem: false,
      navigation: false,
      pagination: false,
      itemsDesktop: [1499, 2],
      itemsDesktopSmall: [991, 1],
      itemsTablet: [767, 2],
      itemsTabletSmall: [600, 1],
      itemsMobile: [319, 1]
    });
    // Custom Navigation Events
    $(".wdbestseller_next").click(function () {
      $('.bestsellercarousel').trigger('owl.next');
    })
    $(".wdbestseller_prev").click(function () {
      $('.bestsellercarousel').trigger('owl.prev');
    });
  });



  $('#tabss a').tabss();

  $(document).ready(function () {
    $('.productcategorycarousel').owlCarousel({
      items: 6,
      singleItem: false,
      navigation: false,
      pagination: false,
      itemsDesktop: [1729, 5],
      itemsDesktopSmall: [1379, 4],
      itemsTablet: [991, 3],
      itemsTabletSmall: [600, 2],
      itemsMobile: [319, 1]
    });
    // Custom Navigation Events
    $(".wdproductcategory_next").click(function () {
      $('.productcategorycarousel').trigger('owl.next');
    })
    $(".wdproductcategory_prev").click(function () {
      $('.productcategorycarousel').trigger('owl.prev');
    });
  });



type="text/javascript"

  $(document).ready(function () {
    $('.blogcarousel').owlCarousel({
      items: 4,
      autoPlay: false,
      singleItem: false,
      navigation: true,
      navigationText: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
      pagination: true,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [991, 2],
      itemsTablet: [575, 1]
    });
  });





  var wd_live_search = {
    selector: '#search input[name=\'search\']',
    text_no_matches: '',
    height: '50px'
  }

  $(document).ready(function () {
    var html = '';
    html += '<div class="live-search">';
    html += '	<ul>';
    html += '	</ul>';
    html += '<div class="result-text"></div>';
    html += '</div>';

    //$(wd_live_search.selector).parent().closest('div').after(html);
    $(wd_live_search.selector).after(html);

    $(wd_live_search.selector).autocomplete({
      'source': function (request, response) {
        var filter_name = $(wd_live_search.selector).val();
        var cat_id = 0;
        var module_wd_live_search_min_length = '1';
        if (filter_name.length < module_wd_live_search_min_length) {
          $('.live-search').css('display', 'none');
          $('body').removeClass('search-open');
        }
        else {
          var html = '';
          html += '<li style="text-align: center;height:10px;">';
          html += '<img class="loading" src="assets/image/catalog/loading.gif" />';
          html += '</li>';
          $('.live-search ul').html(html);
          $('.live-search').css('display', 'block');
          $('body').addClass('search-open');

          $.ajax({
            url: 'index.php?route=extension/module/wd_live_search&filter_name=' + encodeURIComponent(filter_name),
            dataType: 'json',
            success: function (result) {
              var products = result.products;
              $('.live-search ul li').remove();
              $('.result-text').html('');
              if (!$.isEmptyObject(products)) {
                var show_image = 1;
                var show_price = 1;
                var show_description = 1;
                $('.result-text').html('<a href="https://demo.webdigify.com/OPC03/OPC090_quickstore/index.php?route=product/search&amp;search=' + filter_name + '" class="view-all-results"> View all results                       (' + result.total + ')</a>');

                $.each(products, function (index, product) {
                  var html = '';

                  html += '<li>';
                  html += '<a href="' + product.url + '" title="' + product.name + '">';
                  if (product.image && show_image) {
                    html += '	<div class="product-image col-sm-3 col-xs-4"><img alt="' + product.name + '" src="' + product.image + '"></div>';
                  }
                  html += '<div class="search-description col-sm-9 col-xs-8">';
                  html += '	<div class="product-name">' + product.name;
                  if (show_description) {
                    html += '<p>' + product.extra_info + '</p>';
                  }
                  html += '</div>';
                  if (show_price) {
                    if (product.special) {
                      html += '	<div class="product-price"><span class="price">' + product.special + '</span><span class="special">' + product.price + '</span></div>';
                    } else {
                      html += '	<div class="product-price"><span class="price">' + product.price + '</span></div>';
                    }
                  }
                  html += '</div>';
                  html += '<span style="clear:both"></span>';
                  html += '</a>';
                  html += '</li>';
                  $('.live-search ul').append(html);
                });
              } else {
                var html = '';
                html += '<li style="text-align: center;height:10px;">';
                html += wd_live_search.text_no_matches;
                html += '</li>';

                $('.live-search ul').html(html);
              }
              $('.live-search').css('display', 'block');
              $('body').addClass('search-open');
              return false;
            }
          });
        }
      },
      'select': function (product) {
        $(wd_live_search.selector).val(product.name);
      }
    });

    $(document).bind("mouseup touchend", function (e) {
      var container = $('.live-search');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
    });
  });

