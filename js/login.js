/*
 * File:            login.js
 *
 * Description:	    Provides functionality for reading in login information and verifying login.
*/

/*
 * Function:        login onclick
 *
 * Parameters:      n/a
 *
 * Description:	    Called within index.html upon pressing login button. It recieves the username and password data that
                    the user ented in the login form and saves it to variables, passing the information to verifylogin function.
 */
$(document).ready(function() {
    $("#login").click(function(e) {
        e.preventDefault();
        console.log( "User = " + $("#username").val() );
        console.log( "Pass = " + $("#password").val() );
        var checkuser = $("#username").val();
        var checkpass = String($("#password").val());
        verifylogin(checkuser,checkpass,verify);
    });
});

/*
 * Function:        verify
 *
 * Parameters:      verified, username
 *
 * Description:	    Called by login onclick. It recieves the variables containing username and password data
 *                  and checks if the user is verified. If verified, the user will then be taken to the appropriate
 *                  dashboard. 
 */
function verify(verified, username){
   console.log(username);
    if (!verified) {
        console.log("unverified");
        window.alert("Unverified user");
    }
    else {
        console.log("verified");
        if (username == 'admin@scu.edu') {
            window.location.replace("http://students.engr.scu.edu/~nsampema/php/admindash.php");
        }
        else {
            window.location.replace("http://students.engr.scu.edu/~nsampema/php/alumnidash.php");
        }
    }
}
