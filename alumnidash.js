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

var myEvents = [
{
    "EVENTNAME": "First Friday Mass and Lunch",
    "EVENTDATE" : "Arshi",
    "EVENTTIME" : "Jujara",
    "EVENTDESCRIPTION" : "2019",
    "EVENTLOCATION" : "ajujara@scu.edu",
    "EVENTPOSTEDBY" : "Me"
}
];

$(document).ready(function(){
    viewEvents(filltable);
});

function viewEvents(filltable) {
	console.log("Alumni dashboard: view events");
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
    console.log("Events: " + myEvents);
    var tbody = document.getElementById('tbody');
    var title = document.getElementById('regTitle');
    var attendeelist = document.getElementById('attendeelist');

    for (var i = 0; i < myEvents.length; i++) {
        var tr = '<tr>';
        tr += "<td>" + myEvents[i].EVENTDATE + "</td>" + "<td>" + myEvents[i].EVENTTIME + "</td>" + "<td class='eventname' value=" + "'" + myEvents[i].EVENTNAME + "'>" + myEvents[i].EVENTNAME + "</td>" + "<td>" + myEvents[i].EVENTDESCRIPTION + "</td>" + "<td>" + myEvents[i].EVENTLOCATION + "</td>" + "<td>" + myEvents[i].EVENTPOSTEDBY + "</td>" + "<td>" + '<button type="button" class="btn btn-info btn-sm" style="margin-top:30%;" id=' + i + ' data-target="#regmodal"; onclick="register(' + i + ",'" + myEvents[i].EVENTNAME + "'" + ')" data-toggle="modal";>Register</button>' + "</td>" + "</tr>";
        tbody.innerHTML += tr;
    }
}


function register(index, name) {
    attendeelist.innerHTML = '';
    var eventname = name;
    console.log("In register: " + eventname);
    window.sessionStorage.setItem('eventname', eventname);
    window.sessionStorage.setItem('attendeeevent', eventname);
    attendeeList();
}

function attendeeList() {
    var eventattendees = [];
    var attendeeEvent = window.sessionStorage.getItem('attendeeevent');
    for (var i = 0; i < attendees.length; i++) {
        if (attendeeEvent == attendees[i].EVENTNAME) {
            eventattendees.push(attendees[i]);
        }
    }
    console.log(eventattendees);
    for (var j = 0; j < eventattendees.length; j++) {
        var li = '<li class="list-group-item">';
        li += eventattendees[j].FIRSTNAME + " " + eventattendees[j].LASTNAME + ", Class of " + eventattendees[j].GRADYEAR + '</li>';
        attendeelist.innerHTML += li;
    }
}
    
$("#registerbutton").click(function() {
        var eventname = window.sessionStorage.getItem('eventname');
        var firstname = $( "#firstname" ).val();
        var lastname = $( "#lastname" ).val();
        var registeremail = $( "#registeremail" ).val();
        var gradyear = $( "#gradyear" ).val();
        var guests = $( "#guests" ).val();
        console.log(firstname + lastname + registeremail + gradyear + guests + eventname);
        // Clear input text fields
        var firstname = $( "#firstname" ).val('');
        var lastname = $( "#lastname" ).val('');
        var registeremail = $( "#registeremail" ).val('');
        var gradyear = $( "#gradyear" ).val('');
        var guests = $( "#guests" ).val('');
});