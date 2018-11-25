/*
 * File:            admincreate.js
 *
 * Description:	    Provides functionality for admincreate.html. 
*/

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
}