<?php

//This file contains the dashboard for alumni
include 'session.php';
include 'alumnicheck.php';

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
    <link href="../style.css" rel="stylesheet">
    <script src="../js/api.js"></script>
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
            <li class="nav-item active">
              <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="alumnicreate.php">Create an Event</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="logout" onclick="attemptlogout()" href="#">Logout</a>
            </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Event Table -->
    <div class="container" style="margin-top:5%;">
    <h2>Event Calendar</h2>
    <table class="table table-striped" style="margin-top:5%;" id="eventtable">
        <thead>
            <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Event Name</th>
                <th scope="col">Event Description</th>
                <th scope="col">Location</th>
                <th scope="col">Posted by</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
    </table>
    </div>

    <!-- Registration Modal -->
    <div id="regmodal" class="modal hide fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div id="regForm" class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" id="firstname" placeholder="First name"></div>
                            <div class="col">
                                <input type="text" class="form-control" id="lastname" placeholder="Last name">
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" id="registeremail" placeholder="Email Address">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" id="gradyear" placeholder="Graduation Year">
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col">
                                <label for="guests">Number of Guests:</label>
                                <input type="text" class="form-control" id="guests" placeholder="Number of Guests">
                            </div>
                        </div>
                    </form>
                </div>

                <div id="myfooter" class="modal-footer">
                    <button type="button" id="submitbutton" class="btn btn-info" data-toggle="modal" onclick="submit()">Submit</button>
                </div>

                <div id="attendees" class="modal-body">
                <h5>See who else is attending!</h5>
                <ul id= "attendeelist" class="list-group">
                </ul>
                </div>

            </div>
        </div>
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
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script src="../js/alumnidash.js"></script>
    <script src="../js/login.js"></script>
  </body>

</html>
