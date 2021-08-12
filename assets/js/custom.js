$(document).ready(function () {
    $('li.school').click(function() {
        var id = $(this).data('details');
        $('table.school-hidden').hide();
        $('#'+id).show();
        $('li').removeClass('Addselected');
        $(this).addClass('Addselected');
    });

    $("li.school").click(function() {
        $(this).siblings("li").css("backgroundColor", "");
        $(this).animate({
            backgroundColor: '#0000FF'
        }, 'fast');
    });

    // Assign class
    $('#assignClass').click(function(){
        var ClassASsignValue = $('#AssignClassID :selected').text();
        document.getElementById("assignClassShow").innerHTML = ClassASsignValue;
    });
});    
