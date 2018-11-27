<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        if (key_exists('query', $_POST)) {
            $response = '';
            switch ($_POST['query']) {
        case 'login':
            
		   $username = $_POST['username'];
		   $studentid = $_POST['studentid'];
		   $response = '{"authenticated": "False"}';
		   if(verify_user($username,$studentid)){
            //$_SESSION['user_id'] = $username;
			$response = '{"authenticated": "True"}';
            
		   }
		   echo $response;
        break;
            
        case 'create':
        $eventdate =  $_POST['eventdate'];
        $eventtime  =$_POST['eventtime'];
        $eventname  =$_POST['eventname'];
        $eventdescription  =$_POST['eventdescription'];
        $eventlocation  =$_POST['eventlocation'];
        $eventpostedby  =$_POST['eventpostedby'];
        $eventemail  =$_POST['eventemail'];
        $eventid = get_eventid($eventname);
        $eventapproved = "True";
        $response = database_query("INSERT INTO events VALUES('$eventid','$eventdate',' $eventtime','$eventname','$eventdescription',' $eventlocation',' $eventpostedby',' $eventemail','$eventapproved')");  
        break;
            
        case 'createunapproved':
        
        $eventdate =  $_POST['eventdate'];
		$eventtime  =$_POST['eventtime'];
		$eventname  =$_POST['eventname'];
		$eventdescription  =$_POST['eventdescription'];
		$eventlocation  =$_POST['eventlocation'];
		$eventpostedby  =$_POST['eventpostedby'];
		$eventemail  =$_POST['eventemail'];
		$eventid = get_eventid($eventname);
		$eventapproved = "False";
        $response = database_query("INSERT INTO events VALUES('$eventid','$eventdate',' $eventtime','$eventname','$eventdescription',' $eventlocation',' $eventpostedby',' $eventemail','$eventapproved')");  
        break;
                 
        case 'register':
        $eventid  =$_POST['eventid'];
        $attendeefirstname  =$_POST['attendeefirstname'];
        $attendeelastname  =$_POST['attendeelastname'];
        $attendeegradyear  =$_POST['attendeegradyear'];
        $attendeeemail  =$_POST['attendeeemail'];
        $guestcount  =$_POST['guestcount'];
        $response = database_query("INSERT INTO attendees VALUES('$eventid', '$attendeefirstname','$attendeelastname',' $attendeegradyear',' $attendeeemail',' $guestcount')");
                    
        break;
                    
        case 'updatestatus':
        $eventid = $_POST['eventid'];
		if ($_POST['updatedstatus'] == "True"){
			$response = database_query("Update events SET eventapproved = 'True' WHERE eventid = '$eventid'");
			
        
        }
		else if ($_POST['updatedstatus'] == "False"){
			$response = database_query("DELETE FROM events WHERE eventid = '$eventid'");
        }
        echo $response;
		break;
                
        case 'getevents':
		$response = perform_query("SELECT * FROM events");
		echo $response;
		break;
        
        case 'getattendees':
        $eventid  =$_POST['eventid'];
		$response = perform_query("SELECT * FROM attendees where eventid = '$eventid'");
		echo $response;
		break;

        case 'getapproved':
		$response = perform_query("SELECT * FROM events where eventapproved = 'True'");
		echo $response;
		break;
		

		case 'getunapproved':
		$response = perform_query("SELECT * FROM events where eventapproved = 'False'");
		echo $response;
		break;
		
        default:
        $response = "{error: 'INVALID QUERY'}";
        echo $response;
        break;
            }
        }
    }

    function verify_user($user, $studentid) {
	$retrieved_id = database_query("SELECT studentid from users where username ='$user'");
	if (count($retrieved_id)!= 1){
		return False;
	}
	return ($studentid == $retrieved_id[0]['STUDENTID']);
    
    
    }  
    function perform_query($sql_query) {
        //convert to text to send to frontend
        return json_encode(database_query($sql_query));
    }
    
    function get_eventid($eventname) {
	return hash('sha256', $eventname . strval(time()));
    
    }
    
    function database_query($sql_query) {
        $conn=oci_connect('nsampema','OceanInAShell', '//dbserver.engr.scu.edu/db11g');
        if(!$conn) {
            print "<br> connection failed:";
            exit;
        }
        
        $query = oci_parse($conn, $sql_query);
        $response = [];
	$kbool = oci_execute($query, OCI_COMMIT_ON_SUCCESS);
        if ($kbool) {
            while($row = oci_fetch_array($query,OCI_ASSOC)) {
                array_push($response, $row);
            }

            oci_free_statement($query);
            oci_commit($conn);
        } else {
            $response = ["Error" => oci_error(), "Query" => $sql_query];
        }
        oci_close($conn);
        return $response;
    }
?>
