/*
 * File:            admincreate.js
 *
 * Description:	    Provides functionality for admincreate.html. 
*/

$(document).ready(function(){
    requiredFields();
});

/*
 * Function:        requiredFields
 * 
 * Parameters:      None
 * 
 * Description:	    Ensuring all fields are filled out before submitting.
 */

function requiredFields() {
    $( "#add" ).attr('disabled','disabled');
    $("form input").keyup(function(){
        var empty = false;
            $('form input').each(function() {
                if ($(this).val() == '') {
                    empty = true;
                }
            });

            if (!empty) {
                $('#add').removeAttr('disabled');
            }
    });
}

/*
 * Function:        addEvent
 * 
 * Parameters:      None
 * 
 * Description:	    Allows an admin user to create events. Sends details to createEvent()
                    which directly adds the entry to the events table.
 */

function addEvent() {
    var date = $( "#date" ).val();
    var time = $( "#time" ).val();
    var name = $( "#title" ).val();
    var description = $( "#description" ).val();
    var location = $( "#location" ).val();
    var postedby = "SCU Alumni Office";
    var email = "admin@scu.edu";
    createEvent(date,time,name,description,location,postedby,email);
    console.log("Added");
}