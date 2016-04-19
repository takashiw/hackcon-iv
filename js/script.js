$(document).ready(function() {
  var $page = $('html, body');

  $('a[href^="#"]').click(function(e) {
    e.preventDefault();

    var $target = $($(this).attr('href'));

    $page.animate({
      'scrollTop': $target.offset().top
    }, 500);
  });

  $('.register').click(function(e) {
    fbq('track', 'Lead');
  });

});
