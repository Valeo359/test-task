$(document).ready(function(){
    $('.dropdown').click(function(){
        $('.nav-dropdown__sub').slideToggle(300);
    });
    $('.menu-bars').click(function(event){
        $('.mobile-nav').addClass('active');
    });
    $('.cross').click(function(event){
        $('.mobile-nav').removeClass('active');
    });
    $(window).resize(function(){
        if ($(window).width() > 860) {
            $('.mobile-nav').removeClass('active');
        }
    });
});