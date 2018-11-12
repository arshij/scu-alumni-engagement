// Hardcoded data for initial system demo
var myEvents = [
{
    "date" : "11/02/2018",
    "time" : "12:00pm PDT",
    "name" : "First Friday Mass and Lunch",
    "description" : "Join us for noon Mass in the Mission Church followed by a catered lunch in Donohoe Alumni House.",
    "location" : "Mission Church",
    "postedby" : "SCU Alumni Office"
},
{
    "date" : "11/07/2018",
    "time" : "6:15pm PST",
    "name" : "Come Meet Jeff Miller ’73 and the Larry O’Brien NBA Championship Trophies",
    "description" : "Join us as we welcome back Jeff Miller ’73, MBA ’76 to Santa Clara. Listen to this Bronco talk about life after SCU and winning three NBA championship trophies on the executive board of the Warriors organization. After take a photo with the 2015, 2017, and 2018 trophies and meet Jeff.",
    "location" : "St. Clare Room in SCU Library",
    "postedby" : "SCU Alumni Office"
}
];

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

// Appending data to HTML table
var tbody = document.getElementById('tbody');
var title = document.getElementById('regTitle');
var attendeelist = document.getElementById('attendeelist');

for (var i = 0; i < myEvents.length; i++) {
    var tr = '<tr>';
    tr += "<td>" + myEvents[i].date + "</td>" + "<td>" + myEvents[i].time + "</td>" + "<td class='eventname' value=" + "'" + myEvents[i].name + "'>" + myEvents[i].name + "</td>" + "<td>" + myEvents[i].description + "</td>" + "<td>" + myEvents[i].location + "</td>" + "<td>" + myEvents[i].postedby + "</td>" + "<td>" + '<button type="button" class="btn btn-info btn-sm" style="margin-top:30%;" id=' + i + ' data-target="#regmodal"; onclick="register(' + i + ')" data-toggle="modal";>Register</button>' + "</td>" + "</tr>";
    tbody.innerHTML += tr;
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
    }}
    
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

// <li class="list-group-item">Vestibulum at eros</li>