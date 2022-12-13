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
