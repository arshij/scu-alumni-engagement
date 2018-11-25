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
    var tbody = document.getElementById('tbody');
    var title = document.getElementById('regTitle');
    for (var i = 0; i < myEvents.length; i++) {
        var tr = '<tr>';
        tr += "<td>" + myEvents[i].EVENTDATE + "</td>" + "<td>" + myEvents[i].EVENTTIME + "</td>" + "<td class='eventname' value=" + "'" + myEvents[i].EVENTNAME + "'>" + myEvents[i].EVENTNAME + "</td>" + "<td>" + myEvents[i].EVENTDESCRIPTION + "</td>" + "<td>" + myEvents[i].EVENTLOCATION + "</td>" + "<td>" + myEvents[i].EVENTPOSTEDBY + "</td>" + "<td>" + '<button type="button" class="btn btn-info btn-sm" style="margin-top:30%;" id=' + i + ' onclick="deleteEvent(' + "'" + myEvents[i].EVENTID + "'" + ')">Delete</button>' + "</td>" + "</tr>";
        tbody.innerHTML += tr;
    }
}

/*
 * Function:        deleteEvent
 * 
 * Parameters:      eventtid
 * 
 * Description:	    Deletes an entry from the events table.
 */

function deleteEvent(eventid) {
    alert("Event " + eventid + " has been deleted");
    updateStatus(eventid, 'False');
}