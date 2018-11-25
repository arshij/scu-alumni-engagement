/*
 * File:        alumnidash.js
 *
 * Description:	Provides functionality for alumnidash.html. 
*/

/* SAMPLE ATTENDEE DATA
var attendees = [
{
    "EVENTNAME": "First Friday Mass and Lunch",
    "FIRSTNAME" : "Arshi",
    "LASTNAME" : "Jujara",
    "GRADYEAR" : "2019",
    "EMAIL" : "ajujara@scu.edu",
},
{
    "EVENTNAME": "First Friday Mass and Lunch",
    "FIRSTNAME" : "John",
    "LASTNAME" : "Doe",
    "GRADYEAR" : "1985",
    "EMAIL" : "jdoe@scu.edu",
},
{
    "EVENTNAME": "Come Meet Jeff Miller ’73 and the Larry O’Brien NBA Championship Trophies",
    "FIRSTNAME" : "Jane",
    "LASTNAME" : "Doe",
    "GRADYEAR" : "1980",
    "EMAIL" : "jdoe1@scu.edu",
},
];
*/

$(document).ready(function(){
    viewApproved(filltable);
});

/*
 * Function:	filltable
 * 
 * Parameters:  jsondata
 * 
 * Description:	Called within viewUnapproved(). It recieves the events data from the SQL
                database as parsed JSON and generates an HTML table row with each entry.
 */

function filltable(jsondata){
    var myEvents = jsondata;
    console.log("Events: " + myEvents);
    var tbody = document.getElementById('tbody');
    var title = document.getElementById('regTitle');
    var attendeelist = document.getElementById('attendeelist');

    for (var i = 0; i < myEvents.length; i++) {
        var tr = '<tr>';
        tr += "<td>" + myEvents[i].EVENTDATE + "</td>" + "<td>" + myEvents[i].EVENTTIME + "</td>" + "<td class='eventname' value=" + "'" + myEvents[i].EVENTNAME + "'>" + myEvents[i].EVENTNAME + "</td>" + "<td>" + myEvents[i].EVENTDESCRIPTION + "</td>" + "<td>" + myEvents[i].EVENTLOCATION + "</td>" + "<td>" + myEvents[i].EVENTPOSTEDBY + "</td>" + "<td>" + '<button type="button" class="btn btn-info btn-sm" style="margin-top:30%;" id=' + i + ' data-target="#regmodal"; onclick="getEventName(' + i + ",'" + myEvents[i].EVENTNAME + "'" + ')" data-toggle="modal";>Register</button>' + "</td>" + "</tr>";
        tbody.innerHTML += tr;
    }
}

/*
 * Function:	getEventName
 * 
 * Parameters:  index, name
 * 
 * Description:	Called onclick of "Register" button in HTML table. Gets event name to
                be used in other functions. Calls attendeeList() to display updated
                attendee list.
 * 
 */

function getEventName(index, name) {
    attendeelist.innerHTML = '';
    var eventname = name;
    window.sessionStorage.setItem('eventname', eventname);
    window.sessionStorage.setItem('attendeeevent', eventname);
    attendeeList(name);
}

/*
 * Function:	attendeeList
 * 
 * Parameters:  eventname
 * 
 * Description:	Searches attendees of all registrations to find all matches for the given
                event. Displays name and grad year to "See who else is attending" list in
                modal.
 * 
 */

function attendeeList(eventname) {
    var eventattendees = [];
    
    // Get all attendees for the given eventname and store in attendee array.
    for (var i = 0; i < attendees.length; i++) {
        if (eventname == attendees[i].EVENTNAME) {
            eventattendees.push(attendees[i]);
        }
    }
    
    // Generate HTML list from event attendee array.
    for (var j = 0; j < eventattendees.length; j++) {
        var li = '<li class="list-group-item">';
        li += eventattendees[j].FIRSTNAME + " " + eventattendees[j].LASTNAME + ", Class of " + eventattendees[j].GRADYEAR + '</li>';
        attendeelist.innerHTML += li;
    }
}
    
/*
 * Function:	submit
 * 
 * Parameters:  None
 * 
 * Description:	Send user registration details to the attendee database in back-end.
 */

function submit() {
    var eventname = window.sessionStorage.getItem('eventname');
    var firstname = $( "#firstname" ).val();
    var lastname = $( "#lastname" ).val();
    var registeremail = $( "#registeremail" ).val();
    var gradyear = $( "#gradyear" ).val();
    var guests = $( "#guests" ).val();
    // registerEvent(eventname,firstname,lastname,registeremail,guests);
    
    // Clear input text fields after user submits.
    var firstname = $( "#firstname" ).val('');
    var lastname = $( "#lastname" ).val('');
    var registeremail = $( "#registeremail" ).val('');
    var gradyear = $( "#gradyear" ).val('');
    var guests = $( "#guests" ).val('');
};