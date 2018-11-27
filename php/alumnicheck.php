<?php
//This file makes sure an admin is not checked in

if ($_SESSION['user_id'] == 'admin@scu.edu') {
  header("Location:http://students.engr.scu.edu/~nsampema/index.html");
}
?>
