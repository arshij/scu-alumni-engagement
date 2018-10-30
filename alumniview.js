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

for (var i = 0; i < myEvents.length; i++) {
    var tr = "<tr>";
    tr += "<td>" + myEvents[i].date + "</td>" + "<td>" + myEvents[i].time + "</td>" + "<td>" + myEvents[i].name + "</td>" + "<td>" + myEvents[i].description + "</td>" + "<td>" + myEvents[i].location + "</td>" + "<td>" + myEvents[i].postedby + "</td>" + "<td>" + '<button type="button" class="btn btn-info btn-sm" style="margin-top:30%;" data-toggle="modal" data-target="#registerpopup' + i +  '">Register</button>' 
        
    /* Modal data */
    + '<div class="modal fade" id="registerpopup' + i + '" role="dialog">' + '<div class="modal-dialog">' + '<div class="modal-content">' + '<div class="modal-header">' + '<button type="button" class="close" data-dismiss="modal">&times;</button>' + '</div>' + '<div class="modal-body">' + '<h4>Register for ' + myEvents[i].name + '</h4>' + '<form>' + '<div class="row">' + '<div class="col">' + '<input type="text" class="form-control" id="firstname" placeholder="First name">' + '</div>' + '<div class="col">' + '<input type="text" class="form-control" id="lastname" placeholder="Last name">' + '</div>' + '</div>' + '<br>' + '<div class="row">' + '<div class="col">' + '<input type="text" class="form-control" id="registeremail" placeholder="Email Address">' + '</div>' + '<div class="col">' + '<input type="text" class="form-control" id="gradyear" placeholder="Graduation Year">' + '</div>' + '</div>' + '<br>' + '<div class="row">' + '<div class="col">' + '<label for="guests">Guests:</label>' + '<input type="text" class="form-control" id="guests" placeholder="Number of Guests">' + '</div>' + '</div>' + '</form>' + '</div>' + '<div class="modal-footer">' + '<button type="button" class="btn btn-info" data-toggle="modal" data-target="#registerclose">Register</button>' + '</div>' + '</div>' + '</div>' + '</div>' 
        
    + "</td>" + "</tr>";
    tbody.innerHTML += tr;
}
