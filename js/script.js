$(document).ready(function(){

    $("#list").on( "click", "li", function( event ) {
        event.preventDefault();
        if (event.target.value === 'check') {
            $(this).find('p').css('text-decoration','line-through');
            $(this).css('background-color','#d8ffdc');
        } else if (event.target.value === 'delete') {
            $(this).remove();
        }
    });

    $("#addItem").on("click", function(event) {
        event.preventDefault();
        var item = $("#item").val();
        $("#list").append("<li><p>" + item + "</p><input type='button' value='check'/><input class='delete' type='button' value='delete'/></li>");
    });

});