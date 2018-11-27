
function createEvent(date,time,name,description,location,postedby,email) {

/*
 * Parameters:      date,time,name,description,location,postedby,email
 * 
 * Description:	    Allows an admin user to create an event without it having to be approved
 */

    console.log("attempting event creation");
    $.ajax({
        cache: false,
        'url' : 'http://students.engr.scu.edu/~nsampema/php/api.php',
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
            console.log("Request: "+JSON.stringify(request));
        }
    });
}

function createUnapproved(date,time,name,description,location,postedby,email) {
/*
 * Parameters:      date,time,name,description,location,postedby,email
 * 
 * Description:	    Allows an alumni user to create an event and send it into the approval queue
 */

    console.log("attempting unapproved event creation");
    $.ajax({
        cache: false,
        'url' : 'http://students.engr.scu.edu/~nsampema/php/api.php',
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
            console.log("Request: "+JSON.stringify(request));
        }
    });
}

function verifylogin(username,studentid,verify) {
/*
 * Parameters:      username,studentid,verify
 * 
 * Description:	   Allows the verification of a user
 */

    console.log("attempting login");
                console.log(username );
                console.log(studentid);
                console.log(typeof username);
                console.log(typeof studentid );

                
                $.ajax({
                    cache: false,
                    'url' : 'http://students.engr.scu.edu/~nsampema/php/api.php',
                    'type' : 'POST',
		    		'datatype' : "JSON",
                    'data' : {
						'query' : 'login',
		        		'username': username,
						'studentid': studentid
                    },
                    'success' : function(data) {
			console.log(data);
                        var parsed = JSON.parse(data)['authenticated'];
                       
						if (parsed == 'True'){
							verify(true,username);
						}
						else{
							verify(false,username);
						}
					
                    },
                    'error' : function(request,error) {
                        console.log("Request: "+JSON.stringify(request));
                    }
                    
                });
}

function attemptlogout() {
/*
 * Parameters:      
 * 
 * Description:	   logs out user
 */

    console.log("attempting logout");
                
                $.ajax({
                    cache: false,
                    'url' : 'http://students.engr.scu.edu/~nsampema/php/api.php',
                    'type' : 'POST',
		    		'datatype' : "JSON",
                    'data' : {
						'query' : 'logout',
                    },
                    'success' : function(data) {
			window.location.replace("http://students.engr.scu.edu/~nsampema/index.html");
					
                    },
                    'error' : function(request,error) {
                        console.log("Request: "+JSON.stringify(request));
                    }
                    
                });
}


function registerEvent(eventID,firstname,lastname,gradyear,email,guestcount) {
	console.log("attempting event regisration");
	$.ajax({
		cache: false,
		'url' : 'http://students.engr.scu.edu/~nsampema/php/api.php',
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
		  console.log("Request: "+JSON.stringify(request));
		}
	});
}

function viewEvents(filltable) {
	console.log("attempting collection of events");
		parsed =[]
                $.ajax({
                    cache: false,
                    'url' : 'http://students.engr.scu.edu/~nsampema/php/api.php',
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
                        console.log("Request: "+JSON.stringify(request));
                    }
                    
                });
}

function viewApproved(filltable) {
	console.log("attempting collection of approved events");
		parsed =[]
                $.ajax({
                    cache: false,
                    'url' : 'http://students.engr.scu.edu/~nsampema/php/api.php',
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
                        console.log("Request: "+JSON.stringify(request));
                    }
                    
                });
}

function viewUnapproved(filltable) {
	console.log("attempting collection of unapproved events");
            $.ajax({
            cache: false,
            'url' : 'http://students.engr.scu.edu/~nsampema/php/api.php',
            'type' : 'POST',
            'data' : {
				'query' : 'getunapproved'
            },
            'success' :function(data) {
			var parsed = JSON.parse(data);
			filltable(parsed);
            },
                    'error' : function(request,error) {
                        console.log("Request: "+JSON.stringify(request));
                    }
                });
}

function viewAttendees(eventid,filltable) {
	console.log("attempting collection of attendees");
		parsed =[]
                $.ajax({
                    cache: false,
                    'url' : 'http://students.engr.scu.edu/~nsampema/php/api.php',
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
                        console.log("Request: "+JSON.stringify(request));
                    }
                    
                });
}

function updateStatus(eventID,updatedstatus) {
	$.ajax({
		cache: false,
		'url' : 'http://students.engr.scu.edu/~nsampema/php/api.php',
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
		console.log("Request: "+JSON.stringify(request));
		}
	});
}
