
$('select[name=\'recurring_id\'], input[name="quantity"]').change(function () {
  $.ajax({
    url: 'index.php?route=product/product/getRecurringDescription',
    type: 'post',
    data: $('input[name=\'product_id\'], input[name=\'quantity\'], select[name=\'recurring_id\']'),
    dataType: 'json',
    beforeSend: function () {
      $('#recurring-description').html('');
    },
    success: function (json) {
      $('.alert-dismissible, .text-danger').remove();

      if (json['success']) {
        $('#recurring-description').html(json['success']);
      }
    }
  });
});


$('#button-cart').on('click', function () {
  $.ajax({
    url: 'index.php?route=checkout/cart/add',
    type: 'post',
    data: $('#product input[type=\'text\'], #product input[type=\'hidden\'], #product input[type=\'radio\']:checked, #product input[type=\'checkbox\']:checked, #product select, #product textarea'),
    dataType: 'json',
    beforeSend: function () {
      $('#button-cart').button('loading');
    },
    complete: function () {
      $('#button-cart').button('reset');
    },
    success: function (json) {
      $('.alert-dismissible, .text-danger').remove();
      $('.form-group').removeClass('has-error');

      if (json['error']) {
        if (json['error']['option']) {
          for (i in json['error']['option']) {
            var element = $('#input-option' + i.replace('_', '-'));

            if (element.parent().hasClass('input-group')) {
              element.parent().before('<div class="text-danger">' + json['error']['option'][i] + '</div>');
            } else {
              element.before('<div class="text-danger">' + json['error']['option'][i] + '</div>');
            }
          }
        }

        if (json['error']['recurring']) {
          $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
        }

        // Highlight any found errors
        $('.text-danger').parent().addClass('has-error');
      }

      if (json['success']) {
        $.notify({
          message: json['success'],
          target: '_blank'
        }, {
          // settings
          element: 'body',
          position: null,
          type: "info",
          allow_dismiss: true,
          newest_on_top: false,
          placement: {
            from: "top",
            align: "center"
          },
          offset: 0,
          spacing: 10,
          z_index: 2031,
          delay: 5000,
          timer: 1000,
          url_target: '_blank',
          mouse_over: null,
          animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp'
          },
          onShow: null,
          onShown: null,
          onClose: null,
          onClosed: null,
          icon_type: 'class',
          template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-success" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">&nbsp;&times;</button>' +
            '<span data-notify="message"><i class="fa fa-check-circle"></i>&nbsp; {2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
        });

        $('#cart > button').html('<div class="cart_detail"><div class="cart_image"></div><span id="cart-total"> ' + json['total'] + '</span>' + '</div>');

        //$('html, body').animate({ scrollTop: 0 }, 'slow');

        $('#cart > ul').load('index1e1c.html?route=common/cart/info%20ul%20li');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
    }
  });
});


// $('.date').datetimepicker({
//   language: 'en-gb',
//   pickTime: false
// });

$('.datetime').datetimepicker({
  language: 'en-gb',
  pickDate: true,
  pickTime: true
});

$('.time').datetimepicker({
  language: 'en-gb',
  pickDate: false
});

$('button[id^=\'button-upload\']').on('click', function () {
  var node = this;

  $('#form-upload').remove();

  $('body').prepend('<form enctype="multipart/form-data" id="form-upload" style="display: none;"><input type="file" name="file" /></form>');

  $('#form-upload input[name=\'file\']').trigger('click');

  if (typeof timer != 'undefined') {
    clearInterval(timer);
  }

  timer = setInterval(function () {
    if ($('#form-upload input[name=\'file\']').val() != '') {
      clearInterval(timer);

      $.ajax({
        url: 'index.php?route=tool/upload',
        type: 'post',
        dataType: 'json',
        data: new FormData($('#form-upload')[0]),
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
          $(node).button('loading');
        },
        complete: function () {
          $(node).button('reset');
        },
        success: function (json) {
          $('.text-danger').remove();

          if (json['error']) {
            $(node).parent().find('input').after('<div class="text-danger">' + json['error'] + '</div>');
          }

          if (json['success']) {
            alert(json['success']);

            $(node).parent().find('input').val(json['code']);
          }
        },
        error: function (xhr, ajaxOptions, thrownError) {
          alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
      });
    }
  }, 500);
});


$('#review').delegate('.pagination a', 'click', function (e) {
  e.preventDefault();

  $('#review').fadeOut('slow');

  $('#review').load(this.href);

  $('#review').fadeIn('slow');
});

$('#review').load('index6f9e.html?route=product/product/review&amp;product_id=36');

$('#button-review').on('click', function () {
  $.ajax({
    url: 'index.php?route=product/product/write&product_id=36',
    type: 'post',
    dataType: 'json',
    data: $("#form-review").serialize(),
    beforeSend: function () {
      $('#button-review').button('loading');
    },
    complete: function () {
      $('#button-review').button('reset');
    },
    success: function (json) {
      $('.alert-dismissible').remove();

      if (json['error']) {
        $('#review').after('<div class="alert alert-danger alert-dismissible"><i class="fa fa-exclamation-circle"></i> ' + json['error'] + '</div>');
      }

      if (json['success']) {
        $('#review').after('<div class="alert alert-success alert-dismissible"><i class="fa fa-check-circle"></i> ' + json['success'] + '</div>');

        $('input[name=\'name\']').val('');
        $('textarea[name=\'text\']').val('');
        $('input[name=\'rating\']:checked').prop('checked', false);
      }
    }
  });
});

//$(document).ready(function() {
//  $('.thumbnails').magnificPopup({
//    type:'image',
//    delegate: 'a',
//    gallery: {
//      enabled: true
//    }
//  });
//});


$(document).ready(function () {
  var ramswaroop = new URLSearchParams(window.location.search);
  var tarun = ramswaroop.has('review');
  if (tarun == true) {
    setTimeout(function () {
      $('html, body').animate({ scrollTop: $('#tabs_info').offset().top }, 'slow');
      $('a[href=\'#tab-review\']').trigger('click');
    }, 1000);
    return false;
  }
});

$(document).ready(function () {
  if ($(window).width() > 767) {
    $("#tmzoom").elevateZoom({

      gallery: 'additional-carousel',
      //inner zoom

      zoomType: "inner",
      cursor: "crosshair"

      /*//tint

      tint:true,
      tintColour:'#F90',
      tintOpacity:0.5

      //lens zoom

      zoomType : "lens",
      lensShape : "round",
      lensSize : 200

      //Mousewheel zoom

      scrollZoom : true*/


    });
    var z_index = 0;

    $(document).on('click', '.thumbnail', function () {
      $('.thumbnails').magnificPopup('open', z_index);
      return false;
    });

    $('.additional-carousel a').click(function () {
      var smallImage = $(this).attr('data-image');
      var largeImage = $(this).attr('data-zoom-image');
      var ez = $('#tmzoom').data('elevateZoom');
      $('.thumbnail').attr('href', largeImage);
      ez.swaptheimage(smallImage, largeImage);
      z_index = $(this).index('.additional-carousel a');
      return false;
    });

  } else {
    $(document).on('click', '.thumbnail', function () {
      $('.thumbnails').magnificPopup('open', 0);
      return false;
    });
  }
});
$(document).ready(function () {
  $('.thumbnails').magnificPopup({
    delegate: 'a.elevatezoom-gallery',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-with-zoom',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title');
      }
    }
  });
});

$('#custom_tab a').tabs();
$('#tabs a').tabs();




//plugin bootstrap minus and plus
$(document).ready(function () {
  $('.btn-number').click(function (e) {
    e.preventDefault();
    var fieldName = $(this).attr('data-field');
    var type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
      if (type == 'minus') {
        var minValue = parseInt(input.attr('min'));
        if (!minValue) minValue = 1;
        if (currentVal > minValue) {
          input.val(currentVal - 1).change();
        }
        if (parseInt(input.val()) == minValue) {
          $(this).attr('disabled', true);
        }

      } else if (type == 'plus') {
        var maxValue = parseInt(input.attr('max'));
        if (!maxValue) maxValue = 999;
        if (currentVal < maxValue) {
          input.val(currentVal + 1).change();
        }
        if (parseInt(input.val()) == maxValue) {
          $(this).attr('disabled', true);
        }

      }
    } else {
      input.val(0);
    }
  });
  $('.input-number').focusin(function () {
    $(this).data('oldValue', $(this).val());
  });
  $('.input-number').change(function () {

    var minValue = parseInt($(this).attr('min'));
    var maxValue = parseInt($(this).attr('max'));
    if (!minValue) minValue = 1;
    if (!maxValue) maxValue = 999;
    var valueCurrent = parseInt($(this).val());
    var name = $(this).attr('name');
    if (valueCurrent >= minValue) {
      $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
      alert('Sorry, the minimum value was reached');
      $(this).val($(this).data('oldValue'));
    }
    if (valueCurrent <= maxValue) {
      $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
      alert('Sorry, the maximum value was reached');
      $(this).val($(this).data('oldValue'));
    }
  });
  $(".input-number").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== - 1 ||
      // Allow: Ctrl+A
      (e.keyCode == 65 && e.ctrlKey === true) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  });
});










var wd_live_search = {
selector: '#search input[name=\'search\']',
text_no_matches: '',
height: '50px'
}

$(document).ready(function() {
var html = '';
html += '<div class="live-search">';
html += '	<ul>';
html += '	</ul>';
html += '<div class="result-text"></div>';
html += '</div>';

//$(wd_live_search.selector).parent().closest('div').after(html);
$(wd_live_search.selector).after(html);

$(wd_live_search.selector).autocomplete({
  'source': function(request, response) {
    var filter_name = $(wd_live_search.selector).val();
    var cat_id = 0;
    var module_wd_live_search_min_length = '1';
    if (filter_name.length < module_wd_live_search_min_length) {
      $('.live-search').css('display','none');
       $('body').removeClass('search-open');
    }
    else{
      var html = '';
      html += '<li style="text-align: center;height:10px;">';
      html +=	'<img class="loading" src="assets/image/catalog/loading.gif" />';
      html +=	'</li>';
      $('.live-search ul').html(html);
      $('.live-search').css('display','block');
      $('body').addClass('search-open');

      $.ajax({
        url: 'index.php?route=extension/module/wd_live_search&filter_name=' +  encodeURIComponent(filter_name),
        dataType: 'json',
        success: function(result) {
          var products = result.products;
          $('.live-search ul li').remove();
          $('.result-text').html('');
          if (!$.isEmptyObject(products)) {
            var show_image = 1;
            var show_price = 1;
            var show_description = 1;
            $('.result-text').html('<a href="https://demo.webdigify.com/OPC03/OPC090_quickstore/index.php?route=product/search&amp;search='+filter_name+'" class="view-all-results"> View all results                       ('+result.total+')</a>');

            $.each(products, function(index,product) {
              var html = '';

              html += '<li>';
              html += '<a href="' + product.url + '" title="' + product.name + '">';
              if(product.image && show_image){
                html += '	<div class="product-image col-sm-3 col-xs-4"><img alt="' + product.name + '" src="' + product.image + '"></div>';
              }
              html += '<div class="search-description col-sm-9 col-xs-8">';
              html += '	<div class="product-name">' + product.name ;
              if(show_description){
                html += '<p>' + product.extra_info + '</p>';
              }
              html += '</div>';
              if(show_price){
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
            html +=	wd_live_search.text_no_matches;
            html +=	'</li>';

            $('.live-search ul').html(html);
          }
          $('.live-search').css('display','block');
          $('body').addClass('search-open');
          return false;
        }
      });
    }
  },
  'select': function(product) {
    $(wd_live_search.selector).val(product.name);
  }
});

$(document).bind( "mouseup touchend", function(e){
  var container = $('.live-search');
  if (!container.is(e.target) && container.has(e.target).length === 0)
  {
    container.hide();
  }
});
});
//-->
