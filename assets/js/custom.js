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

    // Depend on dropdown
    
    $(function() {
        $('#AddProductClass').change(function(){
          $('.driving-product-data').hide();
          $('#' + $(this).val()).show();
        });
      });

    
      $('.accordian-body').on('show.bs.collapse', function () {
        $(this).closest("table")
            .find(".collapse.in")
            .not(this)
            .collapse('toggle')
    })

 

});    


$(document).ready(function() {

    $('#add_row').click(function(e) {
      //Add row
      row = '';
      row += '<tr><td><input type="text" class="form-control"></td><td ><input type="date" class="form-control"></td><td><input type="date" class="form-control"></td><td><input type="number" class="form-control"></td>';
      row += '<td><button class="btn btn-outline-danger delete_row">remove</button></td></tr>';
      $("tbody").append(row);
    })
  
    $("#add_table").on('click', '.delete_row', function() {
      $(this).closest('tr').remove();
    });
  
  });

