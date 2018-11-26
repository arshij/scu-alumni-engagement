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
