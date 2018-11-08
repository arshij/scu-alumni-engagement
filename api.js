function createEvent(date,time,name,description,location,postedby,email) {
    console.log("attempting event creation");
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

function registerEvent(eventID,name,email) {
	console.log("attempting event regisration");
	$.ajax({
		cache: false,
		'url' : 'http://students.engr.scu.edu/~nsampema/api.php',
		'type' : 'POST',
		'data' : {
		'query' : 'register',
		'eventID': eventID,
		'attendeename':name,
		'attendeeemail': email
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

function viewEvents() {
	console.log("attempting event registration");
                $.ajax({
                    cache: false,
                    'url' : 'http://students.engr.scu.edu/~nsampema/api.php',
                    'type' : 'POST',
                    'data' : {
			'query' : 'getevents'
                    },
                    'success' : function(data) {
                        console.log(data)
                        var parsed = JSON.parse(data)
                        alert(parsed)
                    },
                    'error' : function(request,error) {
                        alert("Request: "+JSON.stringify(request));
                    }
                });
}

function viewUnapproved() {
	console.log("attempting event registration");
                $.ajax({
                    cache: false,
                    'url' : 'http://students.engr.scu.edu/~nsampema/api.php',
                    'type' : 'POST',
                    'data' : {
			'query' : 'getunapproved'
                    },
                    'success' : function(data) {
                        console.log(data)
                        var parsed = JSON.parse(data)
                        alert(parsed)
                    },
                    'error' : function(request,error) {
                        alert("Request: "+JSON.stringify(request));
                    }
                });
}

function updateStatus(eventID,updatedstatus,reason) {
	$.ajax({
		cache: false,
		'url' : 'http://students.engr.scu.edu/~nsampema/api.php',
		'type' : 'POST',
		'data' : {
		'query' : 'updatestatus',
		'eventID': eventID,
		'updatedstatus': updatedstatus
		'reason':reason
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
