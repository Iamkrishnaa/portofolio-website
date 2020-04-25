/*
This is the javascript function to validate contact form
This script checks all the values in fields of contact form and validate whether
the form has empty values or not. if any empty values found it throws alert with specific reason and alert sound 
it also check the format of email and length of message 
if all conditions match it will throw small alert sying successfull and sweet sound
*/
function validateForm(){
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var atposition=email.indexOf("@");
    var dotposition=email.lastIndexOf(".");
    
    if(name.trim() == "" || name.trim() == null){
        document.getElementById("alert").play();
        alert("Name must not be empty");
        return false;
    }
    else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){
        document.getElementById("alert").play();
        alert("Please enter a valid e-mail address.\n Email address must be like xyz@xyz.xyz");  
        return false;  
    }  
    else if(email.trim() == "" || email.trim() == null){
        document.getElementById("alert").play();
        alert("Email should present.");
        return false;
    }
    else if(subject.trim() == "" || subject.trim() == null){
        document.getElementById("alert").play();
        alert("Subject is compulsary");
        return false;
    }
    else if(phone.length > 10){
        document.getElementById("alert").play();
        alert("Phone Number should not exceed 10 characters");
        return false;
    }
    /*
    Checks either the input phone number is in numeric format or not.
    If phone number isn't in numeric format it will pop up alert with specific sound
    */
    else if(isNaN(phone)){
        document.getElementById("alert").play();
        alert("non numeric phone number detected");
        return false;
    }
    else if(message.trim() == "" || message.trim() == null){
        document.getElementById("alert").play();
        alert("message must not be empty");
        return false;
    }
    else if(message.length > 100){
        document.getElementById("alert").play();
        alert("Message can't exceed 100 characters.");
        return false;
    }else{
        document.getElementById("success").play();
        alert( name + " , Your message is sent successfully.");
        true;
    }
}