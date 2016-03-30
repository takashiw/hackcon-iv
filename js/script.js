!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');

$(document).ready(function() {
  var $page = $('html, body');

  $('a[href^="#"]').click(function(e) {
    e.preventDefault();

    var $target = $($(this).attr('href'));

    $page.animate({
      'scrollTop': $target.offset().top
    }, 500);
  });
});

$(document).ready(function() {
  var match
    , urlParams = {}
    , pl = /\+/g
    , search = /([^&=]+)=?([^&]*)/g
    , decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); }
    , query = window.location.search.substring(1);

  while (match = search.exec(query))
    urlParams[decode(match[1])] = decode(match[2]);

  if(urlParams['facebook'] && urlParams['facebook'].length > 0) {
    fbq('init', '261635320842380');
    fbq('track', 'PageView');
    fbq('track', 'ViewContent');

    $(document).on('click', '.register', function(e) {
      fbq('track', 'Lead');
    });
  }
});
