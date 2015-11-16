$(function() {
    $page = $('html, body');
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        $target = $($(this).attr('href'));
        $page.animate({
            'scrollTop': $target.offset().top
        }, 500);
    });
});
