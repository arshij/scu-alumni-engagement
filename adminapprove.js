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

// Appending data to HTML table
var tbody = document.getElementById('tbody');
var title = document.getElementById('regTitle');

// change buttons to be approve or deny events
for (var i = 0; i < myEvents.length; i++) {
    var tr = '<tr>';
    //weird spacing of buttons??
    tr += "<td>" + myEvents[i].date + "</td>" + "<td>" + myEvents[i].time + "</td>" + "<td class='eventname' value=" + "'" + myEvents[i].name + "'>" + myEvents[i].name + "</td>" + "<td>" + myEvents[i].description + "</td>" + "<td>" + myEvents[i].location + "</td>" + "<td>" + myEvents[i].postedby + "</td>" + "<td>" + '<button type="button" class="btn btn-info btn-sm" style="margin-top:30%;" id=' + i + ' data-target="#regmodal"; onclick="approve(' + i + ')" data-toggle="modal";>Approve</button>' + "</td>" + "<td>" + '<button type="button" class="btn btn-info btn-sm" style="margin-top:30%;" id=' + i + ' data-target="#regmodal"; onclick="reject(' + i + ')" data-toggle="modal";>Reject</button>' + "</td>" + "</tr>" + "</tr>";
    tbody.innerHTML += tr;
}

$("#approvebutton").click(function() {
        var eventname = window.sessionStorage.getItem('eventname');
        var firstname = $( "#firstname" ).val();
        var lastname = $( "#lastname" ).val();
        var registeremail = $( "#registeremail" ).val();
        var gradyear = $( "#gradyear" ).val();
        var guests = $( "#guests" ).val();
        console.log(firstname + lastname + registeremail + gradyear + guests + eventname);
});

$("#rejectbutton").click(function() {
        var eventname = window.sessionStorage.getItem('eventname');
        var firstname = $( "#firstname" ).val();
        var lastname = $( "#lastname" ).val();
        var registeremail = $( "#registeremail" ).val();
        var gradyear = $( "#gradyear" ).val();
        var guests = $( "#guests" ).val();
        console.log(firstname + lastname + registeremail + gradyear + guests + eventname);
});

function approve(index) {
    var eventname = myEvents[index].name;
    window.sessionStorage.setItem('eventname', myEvents[index].name);
}

function reject(index) {
    var eventname = myEvents[index].name;
    window.sessionStorage.setItem('eventname', myEvents[index].name);
}
