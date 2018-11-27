/*
 * File:            alumnidash.js
 *
 * Description:	    Provides functionality for alumnidash.html. 
*/

$(document).ready(function(){
    viewApproved(filltable);
    requiredFields();
});

/*
 * Function:        filltable
 * 
 * Parameters:      jsondata
 * 
 * Description:	    Called within viewUnapproved(). It recieves the events data from the SQL
                    database as parsed JSON and generates an HTML table row with each entry.
 */

function filltable(jsondata){
    var myEvents = jsondata;
    
    // Sort events by ascending date
    myEvents.sort(function(a, b) {
        var dateA = new Date(a.EVENTDATE), dateB = new Date(b.EVENTDATE);
        return dateA - dateB;
    });
    
    var tbody = document.getElementById('tbody');
    var title = document.getElementById('regTitle');
    var attendeelist = document.getElementById('attendeelist');
    
    for (var i = 0; i < myEvents.length; i++) {
        var tr = '<tr>';
        
        // This code block adds an HTML row for an entry
        tr += "<td>" + myEvents[i].EVENTDATE + "</td>" + "<td>" + myEvents[i].EVENTTIME + "</td>" + "<td class='eventname' value=" + "'" + myEvents[i].EVENTNAME + "'>" + myEvents[i].EVENTNAME + "</td>" + "<td>" + myEvents[i].EVENTDESCRIPTION + "</td>" + "<td>" + myEvents[i].EVENTLOCATION + "</td>" + "<td>" + myEvents[i].EVENTPOSTEDBY + "</td>" + "<td class='vert-aligned'>" + '<button type="button" class="btn btn-info btn-sm" data-target="#regmodal"; onclick="getEventName(' + "'" + myEvents[i].EVENTNAME + "'" + "," + "'" + myEvents[i].EVENTID + "'" + ')" data-toggle="modal";>Register</button>' + "</td>" + "</tr>";
        tbody.innerHTML += tr;
    }
}

/*
 * Function:        getEventName
 * 
 * Parameters:      name, id
 * 
 * Description:	    Called onclick of "Register" button in HTML table. Gets event name to
                    be used in other functions. Calls attendeeList() to display updated
                    attendee list.
 * 
 */

function getEventName(name, id) {
    attendeelist.innerHTML = '';
    var eventid = id;
    window.sessionStorage.setItem('eventid', eventid);
    viewAttendees(id, fillattendees);
}

/*
 * Function:        fillattendees
 * 
 * Parameters:      eventname
 * 
 * Description:	    Called within getEventName(). It recieves the attendees data from the SQL
                    database as parsed JSON and generates an HTML list within the modal.
 * 
 */

function fillattendees(jsondata) {
    var eventattendees = jsondata;
    
    // Generate HTML list from event attendee array.
    for (var i = 0; i < eventattendees.length; i++) {
        console.log("Attendee: " + eventattendees[i].ATTENDEEFIRSTNAME + " " + eventattendees[i].ATTENDEELASTNAME);
        var li = '<li class="list-group-item">';
        li += eventattendees[i].ATTENDEEFIRSTNAME + " " + eventattendees[i].ATTENDEELASTNAME + ", Class of " + eventattendees[i].ATTENDEEGRADYEAR + '</li>';
        attendeelist.innerHTML += li;
    }
}
    
/*
 * Function:        requiredFields
 * 
 * Parameters:      None
 * 
 * Description:	    Ensuring all fields are filled out before submitting.
 */

function requiredFields() {
    $( "#submitbutton" ).attr('disabled','disabled');
    $("form input").keyup(function(){
        var empty = false;
            $('form input').each(function() {
                if ($(this).val() == '') {
                    empty = true;
                }
            });

            if (!empty) {
                $('#submitbutton').removeAttr('disabled');
            }
    });
}

/*
 * Function:        submit
 * 
 * Parameters:      None
 * 
 * Description:	    Send user registration details to the attendee database in back-end.
 */

function submit() {
    var eventid = window.sessionStorage.getItem('eventid');
    var firstname = $( "#firstname" ).val();
    var lastname = $( "#lastname" ).val();
    var registeremail = $( "#registeremail" ).val();
    var gradyear = $( "#gradyear" ).val();
    var guests = $( "#guests" ).val();
    registerEvent(eventid,firstname,lastname,gradyear,registeremail,guests);

    // Clear input text fields after user submits.
    var firstname = $( "#firstname" ).val('');
    var lastname = $( "#lastname" ).val('');
    var registeremail = $( "#registeremail" ).val('');
    var gradyear = $( "#gradyear" ).val('');
    var guests = $( "#guests" ).val('');
};