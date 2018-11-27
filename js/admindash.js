/*
 * File:            admindash.js
 *
 * Description:	    Provides functionality for admindash.html. 
*/

$(document).ready(function(){
    viewApproved(filltable);
});

/*
 * Function:        filltable
 * 
 * Parameters:      jsondata
 * 
 * Description:	    Called within viewApproved(). It recieves the events data from the SQL
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
    for (var i = 0; i < myEvents.length; i++) {
        var tr = '<tr>';
        
        // This code block adds an HTML row for an entry
        tr += "<td>" + myEvents[i].EVENTDATE + "</td>" + "<td>" + myEvents[i].EVENTTIME + "</td>" + "<td class='eventname' value=" + "'" + myEvents[i].EVENTNAME + "'>" + myEvents[i].EVENTNAME + "</td>" + "<td>" + myEvents[i].EVENTDESCRIPTION + "</td>" + "<td>" + myEvents[i].EVENTLOCATION + "</td>" + "<td>" + myEvents[i].EVENTPOSTEDBY + "</td>" + "<td class='vert-aligned'>" + '<button type="button" class="btn btn-info btn-sm" id=' + i + ' onclick="deleteEvent(' + "'" + myEvents[i].EVENTID + "'" + ')">Delete</button>' + "</td>" + "</tr>";
        tbody.innerHTML += tr;
    }
}

/*
 * Function:        deleteEvent
 * 
 * Parameters:      eventtid
 * 
 * Description:	    Deletes an entry from the events table. Updates the event status to "False"
                    which removes it from the event database.
 */

function deleteEvent(eventid) {
    updateStatus(eventid, 'False');
    window.location.reload(true);
}