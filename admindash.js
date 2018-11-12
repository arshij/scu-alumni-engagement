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
            var parsed = JSON.parse(data)
            filltable(data)
        },
        'error' : function(request,error) {
            alert("Request: "+JSON.stringify(request));
        }        
    });
    return parsed;
}

function filltable(jsondata){
    var myEvents = jsondata;
    var tbody = document.getElementById('tbody');
    var title = document.getElementById('regTitle');

    for (var i = 0; i < myEvents.length; i++) {
        var tr = '<tr>';
        tr += "<td>" + myEvents[i].EVENTDATE + "</td>" + "<td>" + myEvents[i].EVENTTIME + "</td>" + "<td class='eventname' value=" + "'" + myEvents[i].EVENTNAME + "'>" + myEvents[i].EVENTNAME + "</td>" + "<td>" + myEvents[i].EVENTDESCRIPTION + "</td>" + "<td>" + myEvents[i].EVENTLOCATION + "</td>" + "<td>" + myEvents[i].EVENTPOSTEDBY + "</td>" + "<td>" + '<button type="button" class="btn btn-info btn-sm" style="margin-top:30%;" id=' + i + ' onclick="deleteevent(' + i + ')">Delete</button>' + "</td>" + "</tr>";
        tbody.innerHTML += tr;
    }
}

function deleteevent(index) {
    alert("Event " + index + " has been deleted");
}

$(document).ready(function(){
    viewEvents(filltable);
});