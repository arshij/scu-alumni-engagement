$("#addevent").click(function(){
    var date = $( "#date" ).val();
    var time = $( "#time" ).val();
    var title = $( "#title" ).val();
    var description = $( "#description" ).val();
    var location = $( "#location" ).val();
    var postedby = $( "#postedby" ).val();
    var email = $( "#email" ).val();
    $.ajax({
      'url': "http://students.engr.scu.edu/~nsampema/api.php",
      'type': "POST", //send it through get method
      'data': {
	'query' : 'create',
        'eventdate': date,
        'eventtime': time,
        'eventtitle': title,
        'eventdescription': description,
        'eventlocation': location,
        'eventorganizer': postedby,
        'eventemail': email
      },
      success: function(data) {
        console.log("Success");
      }
    });
});