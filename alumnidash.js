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
    var attendeelist = document.getElementById('attendeelist');

    for (var i = 0; i < myEvents.length; i++) {
        var tr = '<tr>';
        tr += "<td>" + myEvents[i].date + "</td>" + "<td>" + myEvents[i].time + "</td>" + "<td class='eventname' value=" + "'" + myEvents[i].name + "'>" + myEvents[i].name + "</td>" + "<td>" + myEvents[i].description + "</td>" + "<td>" + myEvents[i].location + "</td>" + "<td>" + myEvents[i].postedby + "</td>" + "<td>" + '<button type="button" class="btn btn-info btn-sm" style="margin-top:30%;" id=' + i + ' data-target="#regmodal"; onclick="register(' + i + ')" data-toggle="modal";>Register</button>' + "</td>" + "</tr>";
        tbody.innerHTML += tr;
    }
}

function register(index) {
    attendeelist.innerHTML = '';
    var eventname = myEvents[index].name;
    window.sessionStorage.setItem('eventname', myEvents[index].name);
    window.sessionStorage.setItem('attendeeevent', myEvents[index].name);
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

$(document).ready(function(){
    viewEvents(filltable);
});