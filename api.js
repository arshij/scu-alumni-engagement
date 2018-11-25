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

function createUnapproved(date,time,name,description,location,postedby,email) {
    console.log("attempting unapproved event creation");
    $.ajax({
        cache: false,
        'url' : 'http://students.engr.scu.edu/~nsampema/api.php',
        'type' : 'POST',
        'data' : {
			'query' : 'createunapproved',
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
	console.log("attempting login");
		
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

function registerEvent(eventID,firstname,lastname,gradyear,email,guestcount) {
	console.log("attempting event regisration");
	$.ajax({
		cache: false,
		'url' : 'http://students.engr.scu.edu/~nsampema/api.php',
		'type' : 'POST',
		'data' : {
		'query' : 'register',
		'eventid' : eventID,
		'attendeefirstname': firstname,
        'attendeelastname': lastname,
        'attendeegradyear': gradyear,
        'attendeeemail': email,
        'guestcount': guestcount
		},
		'success' : function(data) { 
		
		var parsed = JSON.parse(data)
		return parsed;
		},
		'error' : function(request,error) {
		alert("Request: "+JSON.stringify(request));
		}
	});
}

function viewEvents(filltable) {
	console.log("attempting collection of events");
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


function viewApproved(filltable) {
	console.log("attempting collection of approved events");
		parsed =[]
                $.ajax({
                    cache: false,
                    'url' : 'http://students.engr.scu.edu/~nsampema/api.php',
                    'type' : 'POST',
		    		'datatype' : "JSON",
                    'data' : {
					'query' : 'getapproved'
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
	console.log("attempting collection of unapproved events");
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

function viewAttendees(eventid,filltable) {
	console.log("attempting collection of attendees");
		parsed =[]
                $.ajax({
                    cache: false,
                    'url' : 'http://students.engr.scu.edu/~nsampema/api.php',
                    'type' : 'POST',
		    'datatype' : "JSON",
                    'data' : {
			'query' : 'getattendees',
			'eventid' :eventid
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

function updateStatus(eventID,updatedstatus) {
	$.ajax({
		cache: false,
		'url' : 'http://students.engr.scu.edu/~nsampema/api.php',
		'type' : 'POST',
		'data' : {
		'query' : 'updatestatus',
		'eventid': eventID,
		'updatedstatus': updatedstatus
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
