<?php
//This file contains the code to check if an admin is logged in
if ($_SESSION['user_id'] != 'admin@scu.edu') {
  header("Location:http://students.engr.scu.edu/~nsampema/index.html");
}
?>
