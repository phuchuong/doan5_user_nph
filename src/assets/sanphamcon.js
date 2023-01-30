
  type="text/javascript"
 $('#banner0').swiper({
 autoplay: 4000,
 pagination: '.swiper-pagination',  // If we need pagination
 autoplayDisableOnInteraction: false
 });


$('.total-review36').on('click', function () {
  var t = 'indexe2e1.html?route=product/product&amp;path=62&amp;product_id=36';
  const parseResult = new DOMParser().parseFromString(t, "text/html");
  const parsedUrl = parseResult.documentElement.textContent;
  window.location.href = parsedUrl + '&review';
  return false;
});



$('.total-review44').on('click', function () {
  var t = 'indexa455.html?route=product/product&amp;path=62&amp;product_id=44';
  const parseResult = new DOMParser().parseFromString(t, "text/html");
  const parsedUrl = parseResult.documentElement.textContent;
  window.location.href = parsedUrl + '&review';
  return false;
});



$('.total-review32').on('click', function () {
  var t = 'indexc008.html?route=product/product&amp;path=62&amp;product_id=32';
  const parseResult = new DOMParser().parseFromString(t, "text/html");
  const parsedUrl = parseResult.documentElement.textContent;
  window.location.href = parsedUrl + '&review';
  return false;
});



$('.total-review33').on('click', function () {
  var t = 'indexe14e.html?route=product/product&amp;path=62&amp;product_id=33';
  const parseResult = new DOMParser().parseFromString(t, "text/html");
  const parsedUrl = parseResult.documentElement.textContent;
  window.location.href = parsedUrl + '&review';
  return false;
});



$('.total-review43').on('click', function () {
  var t = 'index0407.html?route=product/product&amp;path=62&amp;product_id=43';
  const parseResult = new DOMParser().parseFromString(t, "text/html");
  const parsedUrl = parseResult.documentElement.textContent;
  window.location.href = parsedUrl + '&review';
  return false;
});


          $('.total-review49').on('click', function () {
            var t = 'indexa77c.html?route=product/product&amp;path=62&amp;product_id=49';
            const parseResult = new DOMParser().parseFromString(t, "text/html");
            const parsedUrl = parseResult.documentElement.textContent;
            window.location.href = parsedUrl + '&review';
            return false;
          });




function subscribe() {
  var emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var email = $('#txtemail').val();
  if (email != "") {
    if (!emailpattern.test(email)) {
      $('.text-danger').remove();
      var str = '<span class="error">Invalid Email</span>';
      $('#txtemail').after('<div class="text-danger">Invalid Email</div>');

      return false;
    }
    else {
      $.ajax({
        url: 'index.php?route=extension/module/newsletters/news',
        type: 'post',
        data: 'email=' + $('#txtemail').val(),
        dataType: 'json',


        success: function (json) {

          $('.text-danger').remove();
          $('#txtemail').after('<div class="text-danger">' + json.message + '</div>');

        }

      });
      return false;
    }
  }
  else {
    $('.text-danger').remove();
    $('#txtemail').after('<div class="text-danger">Email Is Require</div>');
    $(email).focus();

    return false;
  }


}




var wd_live_search = {
  selector: '#search input[name=\'search\']',
  text_no_matches: 'There are no products to list in this category.',
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



 type="text/javascript"
