$(document).ready(function() {
    $("#login").click(function(e) {
        e.preventDefault();
        console.log( "User = " + $("#username").val() );
        console.log( "Pass = " + $("#password").val() );
        var checkuser = $("#username").val();
        var checkpass = String($("#password").val());
        verifylogin(checkuser,checkpass,verify);
    });
});

function verify(verified, username){
   console.log(username);
    if (!verified) {
        console.log("unverified");
        window.alert("Unverified user");
    }
    else {
        console.log("verified");
        if (username == 'admin@scu.edu') {
            window.location.replace("http://students.engr.scu.edu/~nsampema/php/admindash.php");
        }
        else {
            window.location.replace("http://students.engr.scu.edu/~nsampema/php/alumnidash.php");
        }
    }
}