var pass = $("#password");

// Show password Button
$("#showpassword").on('click', function(){
	var fieldtype = pass.attr('type');
	if (fieldtype == 'password') {
		pass.attr('type', 'text');
		$(this).text("Hide Password");
    } else {
		pass.attr('type', 'password');
		$(this).text("Show Password");
    }	
});

function verify(verified, username){
   console.log(username);
    if (!verified) {
        console.log("unverified");
        window.alert("Unverified user");
    }
    else {
        console.log("verified");
        if (username == 'admin') {
            window.location.replace("http://students.engr.scu.edu/~nsampema/html/admindash.html");
        }
        else {
            window.location.replace("http://students.engr.scu.edu/~nsampema/html/alumnidash.html");
        }     
    }
}
function xverifylogin(username,studentid) {
    /*
     * Parameters:      username,studentid,verify
     * 
     * Description:	   Allows the verification of a user
     */
    
        console.log("attempting login");
        console.log( username );
        console.log( studentid );
                    $.ajax({
                        cache: false,
                        'url' : 'http://students.engr.scu.edu/~nsampema/api.php',
                        'type' : 'POST',
                        'datatype' : "JSON",
                        'data' : {
                            'query' : 'login',
                            'username': username,
                            'studentid': studentid
                        },
                        'success' : function(data) {
                            var parsed = JSON.parse(data)['authenticated'];
                            console.log("calling verify")
                            if (parsed == 'True'){
                                console.log("True")
                            }
                            else{
                                console.log("False")
                            }
                        
                        },
                        'error' : function(request,error) {
                            console.log("Request: "+JSON.stringify(request));
                        }
                        
                    });
    }

$(document).ready(function() {
    $("#login").click(function(e) {
        e.preventDefault();
        console.log( "User = " + $("#username").val() );
        console.log( "Pass = " + $("#password").val() );
        var checkuser = $("#username").val();
        var checkpass = String($("#password").val());
        xverifylogin("nsampemane","7");
    });
});

/* Stuff I was testing with, can change/delete
$("#login").on('click', function(){
    console.log( "User = " + $("#username").val() );
    console.log( "Pass = " + $("#password").val() );
    var checkuser = $("#username").val();
    var checkpass = $("#password").val();
    
    for (var i = 0; i < users.length; i++) {
        if (users[i].EMAIL == checkuser) {
            if (checkpass == users[i].IDNUMBER) {
                console.log("Successful login");
            }
        } else {
            alert("Incorrect username or password.");
        }
    }
    document.cookie = "username=" + $("#username").val() + "expires=Thu, 1 Jan 2019 12:00:00 UTC; path=/"; 
    var myCookie = document.cookie;
    console.log("Cookies: " + myCookie);
});

$("#logout").on('click', function(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    var myCookie = document.cookie;
    console.log("Cookies: " + myCookie);
});
*/
