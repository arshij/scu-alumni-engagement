<?php
include 'session.php';

?>
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SCU Alumni Events</title>

    <!-- Bootstrap core CSS -->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <script src="../js/api.js"></script>
    <link href="../style.css" rel="stylesheet">

  </head>

  <body>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark static-top" style="background-color: #99303E;">
        <div class="container">
            <a class="navbar-brand" href="alumnidash.php">SCU Alumni Events</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="alumnidash.php">Home
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="alumnicreate.php">Create an Event</a>
                <span class="sr-only">(current)</span>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="logout" href="../index.html">Logout</a>
            </li>
                </ul>
            </div>
        </div>
    </nav>


    <!-- Event Creation Form -->
    <div class="container" style="margin-top:5%;">
        <h2>Create an Event</h2>
        <form onsubmit="printForm()" style="margin-top:5%;">
          <div class="form-group row">
            <label style="padding-left: 2cm" for="Date" class="col-sm-2 col-form-label">Date:</label>
            <div class="col-sm-7">
              <input class="form-control" id="date" placeholder="mm/dd/yyyy" required="true">
            </div>
          </div>
          <div class="form-group row">
            <label style="padding-left: 2cm" for="Time" class="col-sm-2 col-form-label">Time:</label>
            <div class="col-sm-7">
              <input type="Time" class="form-control" id="time" placeholder="--:-- (am/pm) (timezone)" required="true">
            </div>
          </div>
          <div class="form-group row">
            <label style="padding-left: 2cm" for="Event Title" class="col-sm-2 col-form-label">Event Title:</label>
            <div class="col-sm-7">
              <input type="Event Title" class="form-control" id="title" placeholder="Event Title" required="true">
            </div>
          </div>
          <div class="form-group row">
            <label style="padding-left: 2cm" for="Description" class="col-sm-2 col-form-label">Description:</label>
            <div class="col-sm-7">
              <input type="Description" class="form-control" id="description" placeholder="Description" required="true">
            </div>
          </div>
          <div class="form-group row">
            <label style="padding-left: 2cm" for="Location" class="col-sm-2 col-form-label">Location:</label>
            <div class="col-sm-7">
              <input type="Location" class="form-control" id="location" placeholder="Location" required="true">
            </div>
          </div>
          <div class="form-group row">
            <label style="padding-left: 2cm" for="Organizer" class="col-sm-2 col-form-label">Organizer:</label>
            <div class="col-sm-7">
              <input type="organizer" class="form-control" id="postedby" placeholder="Organizer" required="true">
            </div>
          </div>
          <div class="form-group row">
            <label style="padding-left: 2cm" for="Email" class="col-sm-2 col-form-label">Email:</label>
            <div class="col-sm-7">
              <input type="Email" class="form-control" id="email" placeholder="Email" required="true">
            </div>
          </div>

          <div class="form-group row">
            <div style="padding-left: 2cm" class="col-sm-7">
              <button class="btn btn-info" disabled="disabled" id="submitforapproval" onclick="submitForApproval()">Submit for Approval</button>
            </div>
          </div>
        </form>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p></p>
            <span>The content of these web pages is not generated by and does not represent the views of Santa Clara University or any of its departments or organizations.</span>
            <p></p>
        </div>
    </footer>

    <!-- Bootstrap core JavaScript -->
    <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../js/alumnicreate.js"></script>
    <script src="../js/login.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
  </body>

</html>