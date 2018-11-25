/*
 * File:            alumnicreate.js
 *
 * Description:	    Provides functionality for alumnicreate.html. 
*/

/*
 * Function:        submitForApproval
 * 
 * Parameters:      None
 * 
 * Description:	    Allows an alumni user to create events. Sends details to createApproved()
                    which adds to an approval table for an admin to approve or reject.
 */

function submitForApproval() {
    var date = $( "#date" ).val();
    var time = $( "#time" ).val();
    var title = $( "#title" ).val();
    var description = $( "#description" ).val();
    var location = $( "#location" ).val();
    var postedby = $( "#postedby" ).val();
    var email = $( "#email" ).val();
    createApproved(date,time,name,description,location,postedby,email);
}