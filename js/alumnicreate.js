/*
 * File:            alumnicreate.js
 *
 * Description:	    Provides functionality for alumnicreate.html. 
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
    $( "#submitforapproval" ).attr('disabled','disabled');
    $("form input").keyup(function(){
        var empty = false;
            $('form input').each(function() {
                if ($(this).val() == '') {
                    empty = true;
                }
            });

            if (!empty) {
                $('#submitforapproval').removeAttr('disabled');
            }
    });
}

/*
 * Function:        submitForApproval
 * 
 * Parameters:      None
 * 
 * Description:	    Allows an alumni user to create events. Sends details to createUnapproved()
                    which adds to an approval table for an admin to approve or reject.
 */

function submitForApproval() {
    var date = $( "#date" ).val();
    var time = $( "#time" ).val();
    var name = $( "#title" ).val();
    var description = $( "#description" ).val();
    var location = $( "#location" ).val();
    var postedby = $( "#postedby" ).val();
    var email = $( "#email" ).val();
    createUnapproved(date,time,name,description,location,postedby,email);
    console.log("Added");
}