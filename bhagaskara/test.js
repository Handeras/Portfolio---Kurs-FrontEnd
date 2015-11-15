/**
 * Created by pc on 2015-10-30.
 */

$(function() {

    var Application = function () {

        function watchMore(){
            var hiddenRows = $(".hidden");
            var more = $(".more");

            more.click(function(event){
                for(var i = 0; i < 3; i++){
                    hiddenRows.eq(i).fadeIn(1000).removeClass("hidden");
                }
                hiddenRows = $(".hidden");
            });
        }

        return {
            watchMore: watchMore
        }
    };
    var app = new Application();
    app.watchMore();
});