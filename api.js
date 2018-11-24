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
            var parsed = JSON.parse(data)
	    return parsed
        },
        'error' : function(request,error) {
            ("Request: "+JSON.stringify(request));
        }
    });
}

function verifylogin(username,studentid,verify) {
	console.log("attempting event registration");
		
                $.ajax({
                    cache: false,
                    'url' : 'http://students.engr.scu.edu/~nsampema/api.php',
                    'type' : 'POST',
		    		'datatype' : "JSON",
                    'data' : {
						'query' : 'login',
		        		'username': username,
						'studentid': studentid
                    },
                    'success' : function(data) {
						var parsed = JSON.parse(data)['authenticated'];
						if (parsed == 'True'){
							verify(True)
						}
						else{
							verify(False)
						}
					
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
		'eventid': eventID,
		'attendeename':name,
		'attendeeemail': email
		},
		'success' : function(data) { 
		
		var parsed = JSON.parse(data)
		return parsed
		},
		'error' : function(request,error) {
		alert("Request: "+JSON.stringify(request));
		}
	});
}

function viewEvents(filltable) {
	console.log("attempting event registration");
		parsed =[]
                $.ajax({
                    cache: false,
                    'url' : 'http://students.engr.scu.edu/~nsampema/api.php',
                    'type' : 'POST',
		    'datatype' : "JSON",
                    'data' : {
			'query' : 'getevents'
                    },
                    'success' : function(data) {
			var parsed = JSON.parse(data);
			filltable(parsed);
                    },
                    'error' : function(request,error) {
                        alert("Request: "+JSON.stringify(request));
                    }
                    
                });
}



function viewUnapproved(filltable) {
	console.log("attempting event registration");
            $.ajax({
            cache: false,
            'url' : 'http://students.engr.scu.edu/~nsampema/api.php',
            'type' : 'POST',
            'data' : {
				'query' : 'getunapproved'
            },
            'success' :function(data) {
			alert(data);
			var parsed = JSON.parse(data);
			filltable(parsed);
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
		'eventid': eventID,
		'updatedstatus': updatedstatus,
		'reason':reason
		},
		'success' : function(data) { 
		console.log(data)
		var parsed = JSON.parse(data)
		return parsed
		},
		'error' : function(request,error) {
		alert("Request: "+JSON.stringify(request));
		}
	});
}
