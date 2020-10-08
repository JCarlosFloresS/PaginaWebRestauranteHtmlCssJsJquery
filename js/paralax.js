$(document).ready(function(){

    $(window).scroll(function(){
        var WindowWidth = $(window).width();

        if(WindowWidth > 800){
            var scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform':'translate(0px,' + scroll / 2 + '%)'
            });

            $('.acerca-de article').css({
                'transform':'translate(0px, -' + scroll / 5 + '%)'
            });
        }
    });
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(WindowWidth < 800){
            $('.acerca-de article').css({
                'transform':'translate(0px, 0px)'
            });
        }
    });
});