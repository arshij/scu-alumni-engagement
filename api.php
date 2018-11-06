<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        if (key_exists('query', $_POST)) {
	
            $response = '';
            switch ($_POST['query']) {
                case 'create':
                    // http://students.engr.scu.edu/~nsampema/api.php
                    
                    $eventdate =  $_POST['eventdate'];
		    $eventtime  =$_POST['eventtime'];
		    $eventname  =$_POST['eventname'];
		    $eventdescription  =$_POST['eventdescription'];
		    $eventlocation  =$_POST['eventlocation'];
		    $eventpostedby  =$_POST['eventpostedby'];
		    $eventemail  =$_POST['eventemail'];
                    $response = perform_query("INSERT INTO events VALUES('$eventdate',' $eventtime','$eventname','$eventdescription',' $eventlocation',' $eventpostedby',' $eventemail')");
                    
                    break;
                case 'register':
                    // http://students.engr.scu.edu/~nsampema/api.php
                    
                    
		    $eventname  =$_POST['eventname'];
		    $attendeename  =$_POST['attendeename'];
		    $attendeeemail  =$_POST['attendeeemail'];
                    $response = perform_query("INSERT INTO attendees VALUES('$eventname','$attendeeemail',' $attendeename')");
                    
                    break;
                
                case 'getevents':
			$response = perform_query("SELECT * FROM events");
			echo $response;
			break;
		
                default:
                    $response = "{error: 'INVALID QUERY'}";
                    break;
            }
        }
    }

    
    
    function perform_query($sql_query) {
        $database_connection=oci_connect('nsampema','OceanInAShell', '//dbserver.engr.scu.edu/db11g');
        if(!$database_connection) {
            print "<br> connection failed:";
            exit;
        }
        $query = oci_parse($database_connection, $sql_query);
        $response = [];
	
        if (oci_execute($query, OCI_COMMIT_ON_SUCCESS)) {
	    
            while($row = oci_fetch_array($query, OCI_ASSOC)) {
                array_push($response, $row);
                foreach($row as $result) {
		}
                
            }
            
            oci_free_statement($query);
            oci_commit($database_connection);
        } else {
	    
            $response = ["Error" => oci_error(), "Query" => $sql_query];
        }
        oci_close($database_connection);
        return json_encode($response);
    }

?>
