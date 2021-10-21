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


  $(document).ready(function() {

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2016-09-12',
        navLinks: true, // can click day/week names to navigate views
        selectable: true,
        selectHelper: true,
        select: function(start, end) {
            // Display the modal.
            // You could fill in the start and end fields based on the parameters
            $('.modal').modal('show');

        },
        eventClick: function(event, element) {
            // Display the modal and set the values to the event values.
            $('.modal').modal('show');
            $('.modal').find('#title').val(event.title);
            $('.modal').find('#starts-at').val(event.start);
            $('.modal').find('#ends-at').val(event.end);

        },
        editable: true,
        eventLimit: true // allow "more" link when too many events

    });



    // Whenever the user clicks on the "save" button om the dialog
    $('#save-event').on('click', function() {
        var title = $('#title').val();
        if (title) {
            var eventData = {
                title: title,
                start: $('#starts-at').val(),
                end: $('#ends-at').val()
            };
            $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
        }
        $('#calendar').fullCalendar('unselect');

        // Clear modal inputs
        $('.modal').find('input').val('');

        // hide modal
        $('.modal').modal('hide');
    });





    $(document).ready(function() {
			var my_calendar = $("#calendar").fullCalendar({
                dataTitles: { defaultDate: 'default', today : 'Today' },
                notes: [
                		{ "date": "2016-02-25", "note": ["date here"] },
                		{ "date": "2016-02-28", "note": ["date here"] }
                		],
                showNotes: true,
                dayClick: function(date, view) {
                var selecteddate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
                	$('#myModal').modal('show').on('shown.bs.modal', function () {
                    $('.modal-body').html(selecteddate);
			    });
                }
			});

			// init calendar
			my_calendar.build();

			// update calendar
			my_calendar.update({
				minDate: "2016-02-23",
				defaultDate: new Date()
			});
		});


    
});