<?php
if ($_SESSION['user_id'] != 'admin@scu.edu') {
  header("Location:http://students.engr.scu.edu/~nsampema/index.html");
}
?>
