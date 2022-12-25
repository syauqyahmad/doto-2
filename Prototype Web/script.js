function validate(){
    var username=document.forms["form1"]["user_name"].value
    var fullname=document.forms["form1"]["full_name"].value
    var email=document.forms["form1"]["user_email"].value
    var password=document.forms["form1"]["user_password"].value
    var agree=document.forms["form1"]["check"].checked

    if(username=""){
        alert("Fill in your username");
        return false;
    }else if(fullname=""){
        alert("Fill in your full name");
        return false;
    }else if(email==""){
        alert("Fill in your email")
        return false;
    }else if(!(email.endsWith(".com"))){
        alert("Input valid email")
        return false;
    }else if(password==""){
        alert("Fill in your password");
        return false;
    }else if(password.length<8){
        alert("Password must contain at least 8 chacacters");
        return false;
    }else if(agree==false){
        alert("You must agree with the terms and conditions")
        return false;
    }
    alert("Your registration is now complete!")
    window.location.href = "/index.html";
    return true;
}