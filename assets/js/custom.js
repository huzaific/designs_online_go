$(document).ready(function () {
    $('li.school').click(function() {
        var id = $(this).data('details');
        $('table.school-hidden').hide();
        $('#'+id).show();
    });

    // Assign class
    $('#assignClass').click(function(){
        var ClassASsignValue = $('#AssignClassID :selected').text();
        document.getElementById("assignClassShow").innerHTML = ClassASsignValue;
    });
});    
