<?php
sessionstart();

if ( isset( $_SESSION['user_id'] ) ) {
     //Grab user data from the database using the user_id
     //Let them access the "logged in only" pages
} else {
     //Redirect them to the login page
    header("Location:http://students.engr.scu.edu/~nsampema/index.html");
}
?>
