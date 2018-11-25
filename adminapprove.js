/*
 * File:            adminapprove.js
 *
 * Description:	    Provides functionality for adminapprove.html. 
*/

$(document).ready(function(){
    viewUnapproved(filltable);
    var tbody = document.getElementById('tbody');
    var title = document.getElementById('regTitle');
    for (var i = 0; i < myEvents.length; i++) {
        var tr = '<tr>';
        tr += "<td>" + myEvents[i].EVENTDATE + "</td>" + "<td>" + myEvents[i].EVENTTIME + "</td>" + "<td class='eventname' value=" + "'" + myEvents[i].EVENTNAME + "'>" + myEvents[i].EVENTNAME + "</td>" + "<td>" + myEvents[i].EVENTDESCRIPTION + "</td>" + "<td>" + myEvents[i].EVENTLOCATION + "</td>" + "<td>" + myEvents[i].EVENTPOSTEDBY + "</td>" + "<td>" + '<button type="button" class="btn btn-info btn-sm" style="margin-top:30%;" id=' + i + ' onclick="approve(' + "'" + myEvents[i].EVENTDATE + "'" + "," + "'" + myEvents[i].EVENTTIME + "'" + "," + "'" + myEvents[i].EVENTNAME + "'" + "," + "'" + myEvents[i].EVENTDESCRIPTION + "'" + "," + "'" + myEvents[i].EVENTLOCATION + "'" + "," + "'" + myEvents[i].EVENTPOSTEDBY + "'" + "," + "'" + myEvents[i].EVENTEMAIL + "'" + ')">Approve</button>' + "</td>" + "<td>" + '<button type="button" class="btn btn-info btn-sm" style="margin-top:36%;" id=' + i + '; onclick="reject(' + "'" + myEvents[i].EVENTNAME + "'" + ')">Reject</button>' + "</td>" + "</tr>" + "</tr>";
        tbody.innerHTML += tr;
    }
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
        tr += "<td>" + myEvents[i].EVENTDATE + "</td>" + "<td>" + myEvents[i].EVENTTIME + "</td>" + "<td class='eventname' value=" + "'" + myEvents[i].EVENTNAME + "'>" + myEvents[i].EVENTNAME + "</td>" + "<td>" + myEvents[i].EVENTDESCRIPTION + "</td>" + "<td>" + myEvents[i].EVENTLOCATION + "</td>" + "<td>" + myEvents[i].EVENTPOSTEDBY + "</td>" + "<td>" + '<button type="button" class="btn btn-info btn-sm" style="margin-top:30%;" id=' + i + ' onclick="approve(' + "'" + myEvents[i].EVENTDATE + "'" + "," + "'" + myEvents[i].EVENTTIME + "'" + "," + "'" + myEvents[i].EVENTNAME + "'" + "," + "'" + myEvents[i].EVENTDESCRIPTION + "'" + "," + "'" + myEvents[i].EVENTLOCATION + "'" + "," + "'" + myEvents[i].EVENTPOSTEDBY + "'" + "," + "'" + myEvents[i].EVENTEMAIL + "'" + ')">Approve</button>' + "</td>" + "<td>" + '<button type="button" class="btn btn-info btn-sm" style="margin-top:36%;" id=' + i + '; onclick="reject(' + "'" + myEvents[i].EVENTID + "'" + ')">Reject</button>' + "</td>" + "</tr>" + "</tr>";
        tbody.innerHTML += tr;
    }
}

/*
 * Function:        approve
 * 
 * Parameters:      eventname
 * 
 * Description:	    Approves an alumni-created event. Adds entry to the events table.
 */

function approve(date,time,name,description,location,postedby,email) {
    alert(name + " has been approved.");
    createEvent(date,time,name,description,location,postedby,email);
}

/*
 * Function:        reject
 * 
 * Parameters:      eventid
 * 
 * Description:	    Rejects an alumni-created event. Deletes entry from the approval table.
 */

function reject(eventid) {
    alert(eventid + " has been denied.");
    updateStatus(eventid, 'False');
}