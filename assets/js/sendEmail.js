function validateEmail() {
    var emailID = document.getElementById('email').value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Please enter correct email ID")
       document.myForm.EMail.focus() ;
       return false;
    }
    return(true);
 }

 function validate() {
    if( document.getElementById('name').value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.Name.focus() ;
       return false;
    }
    if( document.getElementById('email').value == "" ) {
        alert( "Please provide your Email!" );
        document.myForm.EMail.focus() ;
        return false;
     }
     if( document.getElementById('message').value == "" ) {
        alert( "Please provide your message" );
        document.myForm.EMail.focus() ;
        return false;
     }
    return( true );
 }

 function sendEmail() {
    alert("test")
    Email.send({
        SecureToken: "2c1fa375-3443-477d-bc0a-0384c5b6aaae",
        To: document.getElementById('email').value,
        From: "oleaga717@gmail.com",
        Subject: "EduNAO",
        Body: document.getElementById('message').value
    }).then(
        window.location.href = "index.html",
    );
}
