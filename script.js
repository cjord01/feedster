var main = function() {
    $('.notification img').click(function() {
        $('ul').toggle('notification-menu');
        // you can also remove the 'notification-menu' and that will remove the animation effect.
    });
    
    $('.btn').click(function() {
        $(this).toggleClass('btn-like');
    });
}

$(document).ready(main);