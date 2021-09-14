$(function () {



    var _st = 0;
    $('.btn_menu').on('click',function() {
        
        if($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('body').removeClass('fixed').attr('style','');
            $('body,html').scrollTop(_st)
            $('header').removeClass('static');
            $('.aside_nav').removeClass('open');
        }else {
            _st = $(window).scrollTop()
            $(this).addClass('open');
            $('body').addClass('fixed').css('top', -_st);
            $('header').addClass('static');
            $('.aside_nav').addClass('open');
        }
        
    });
});