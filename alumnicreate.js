$("#submitforapproval").click(function(){
    var date = $( "#date" ).val();
    var time = $( "#time" ).val();
    var title = $( "#title" ).val();
    var description = $( "#description" ).val();
    var location = $( "#location" ).val();
    var postedby = $( "#postedby" ).val();
    var email = $( "#email" ).val();
    createEvent(date,time,name,description,location,postedby,email);
});


// Need to change this so it does not automatically add to official database
// Adds to new table "Pending" where admin can approve/deny events
function createEvent(date,time,name,description,location,postedby,email) {
    console.log("hello");
    $.ajax({
        cache: false,
        'url' : 'http://students.engr.scu.edu/~nsampema/api.php',
        'type' : 'POST',
        'data' : {
			'query' : 'create',
            'eventdate': date,
			'eventtime': time,
			'eventname': name,
			'eventdescription':description,
			'eventlocation': location,
			'eventpostedby': postedby,
			'eventemail': email
        },
        'success' : function(data) { 
            console.log(data)
            var parsed = JSON.parse(data)
        },
        'error' : function(request,error) {
            alert("Request: "+JSON.stringify(request));
        }
    });
}