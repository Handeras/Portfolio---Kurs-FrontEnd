/**
 * Created by pc on 2015-11-15.
 */

$(function(){
    var arrowBox = $("ul.arrow_box")
    var menuButton = arrowBox.parent();

    arrowBox.hide();
    menuButton.mouseenter(function(){
        arrowBox.show();
    });
    menuButton.mouseleave(function(){
        arrowBox.hide();
    });

    var chairs = $(".chair");
    var chairText = $(".offert_text");

    chairs.each(function(index){
        chairs.eq(index).mouseenter(function(){
            chairText.hide();
        });
        chairs.eq(index).mouseleave(function(){
            chairText.show();
        })
    });

    var buttonLeft = $(".leftArrow");
    var buttonRight = $(".rightArrow");
    var visibleImage = 0;
    var images = $(".top_content li");

    images.eq(visibleImage).show(0);

    buttonRight.click(function(){
        images.eq(visibleImage).hide(0);
        visibleImage++;
        if(visibleImage >= images.length){
            visibleImage = 0;
        }
        images.eq(visibleImage).show(0);
    });
    buttonLeft.click(function(){
        images.eq(visibleImage).hide(0);
        visibleImage--;
        if(visibleImage < 0){
            visibleImage = images.length-1;
        }
        images.eq(visibleImage).show(0);
    });
});