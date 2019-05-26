$(document).ready(function(){
    
    $("#about").click(function (){
            $('html, body').animate({
                scrollTop: $(".layer2").offset().top - 200
            } , 500);
        });
    
    $("#portfolio").click(function (){
            $('html, body').animate({
                scrollTop: $(".layer3").offset().top
            } , 500);
        });
    
    $("#contact").click(function (){
            $('html, body').animate({
                scrollTop: $(".layer4").offset().top
            } , 500);
        });
});