/*
 * File:            adminapprove.js
 *
 * Description:     Provides functionality for adminapprove.html. 
*/

$(document).ready(function(){
    viewUnapproved(filltable);
});

/*
 * Function:        filltable
 * 
 * Parameters:      jsondata
 * 
 * Description:     Called within viewUnapproved(). It recieves the events data from the SQL
                    database as parsed JSON and generates an HTML table row with each entry.
 */

function filltable(jsondata){
    var myEvents = jsondata;
    var tbody = document.getElementById('tbody');
    var title = document.getElementById('regTitle');
    for (var i = 0; i < myEvents.length; i++) {
        var tr = '<tr>';
        
        // This code block adds an HTML row for an entry
        tr += "<td>" + myEvents[i].EVENTDATE + "</td>" + "<td>" + myEvents[i].EVENTTIME + "</td>" + "<td class='eventname' value=" + "'" + myEvents[i].EVENTNAME + "'>" + myEvents[i].EVENTNAME + "</td>" + "<td>" + myEvents[i].EVENTDESCRIPTION + "</td>" + "<td>" + myEvents[i].EVENTLOCATION + "</td>" + "<td>" + myEvents[i].EVENTPOSTEDBY + "</td>" + "<td class='vert-aligned'>" + '<button type="button" class="btn btn-info btn-sm" onclick="approve(' + "'" + myEvents[i].EVENTID + "'" + ')">Approve</button>' + "</td>" + "<td class='vert-aligned'>" + '<button type="button" class="btn btn-info btn-sm" onclick="reject(' + "'" + myEvents[i].EVENTID + "'" + ')">Reject</button>' + "</td>" + "</tr>" + "</tr>";
        
        tbody.innerHTML += tr;
    }
}

/*
 * Function:        approve
 * 
 * Parameters:      eventid
 * 
 * Description: 	Approves an alumni-created event. Adds entry to the events table.
 *                  Updates the event status to "True" which adds it to the events database.
 */

function approve(eventid) {
    updateStatus(eventid, 'True');
    window.location.reload(true);

}

/*
 * Function:        reject
 * 
 * Parameters:      eventid
 * 
 * Description:	    Rejects an alumni-created event. Deletes entry from the approval table.
                    Updates the event status to "True" which removes it from the approval database.
 */

function reject(eventid) {
    updateStatus(eventid, 'False');
    window.location.reload(true);
}
