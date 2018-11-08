// Hardcoded data for initial system demo
/*var myEvents = [
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
];*/

var imported = document.createElement('script');
imported.src = 'api.js';
document.head.appendChild(imported);

$(document).ready(function(){
    var myEvents = viewEvents();
    // Appending data to HTML table
var tbody = document.getElementById('tbody');
var title = document.getElementById('regTitle');

for (var i = 0; i < myEvents.length; i++) {
    var tr = '<tr>';
    tr += "<td>" + myEvents[i].EVENTDATE + "</td>" + "<td>" + myEvents[i].EVENTTIME + "</td>" + "<td class='eventname' value=" + "'" + myEvents[i].EVENTNAME + "'>" + myEvents[i].EVENTNAME + "</td>" + "<td>" + myEvents[i].EVENTDESCRIPTION + "</td>" + "<td>" + myEvents[i].EVENTLOCATION + "</td>" + "<td>" + myEvents[i].EVENTPOSTEDBY + "</td>" + "<td>" + '<button type="button" class="btn btn-info btn-sm" style="margin-top:30%;" id=' + i + ' onclick="deleteevent(' + i + ')">Delete</button>' + "</td>" + "</tr>";
    tbody.innerHTML += tr;
}
 });

function deleteevent(index) {
    alert("Event " + index + " has been deleted");
}