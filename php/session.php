<?php
//this file contains the session security check that is run on all pages other than the index
session_start();

if ( isset( $_SESSION['user_id'] ) ) {
     //Grab user data from the database using the user_id
     //Let them access the "logged in only" pages
} else {
     //Redirect them to the login page
    header("Location:http://students.engr.scu.edu/~nsampema/index.html");
}
?>
