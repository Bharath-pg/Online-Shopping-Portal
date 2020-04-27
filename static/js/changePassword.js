function validate() {
    var pass = document.getElementById("newpassword").value;
    var cpass = document.getElementById("cpassword").value;
    if (pass == cpass) {
        return true;
    } else {
        alert("Passwords do not match!");
        
        document.getElementById("cpassword").value="";
        document.getElementById("newpassword").value="";
        document.getElementById.cpass.focus();
        return false;
    }
}

