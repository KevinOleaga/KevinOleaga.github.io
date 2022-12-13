estado = "";
campo = "";

function validarCampos() {
    if (!document.getElementById("name").value == "") {
        if (!document.getElementById("email").value == "") {
            if (!document.getElementById("message").value == "") {
                estado = "OK";
            } else {
                estado = "FAIL";
                campo = "Mensaje";
            }
        } else {
            estado = "FAIL";
            campo = "Email";
        }
    } else {
        estado = "FAIL";
        campo = "Nombre";
    }

    switch (estado) {
        case "FAIL":
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El espacio "' + campo + '" no puede estar vacío'
            })
            break;
    }
}

function sendEmail() {
    validarCampos()
    alert(estado)

    if (estado == "OK") {
        alert("aber")
        Email.send({
            SecureToken: "2c1fa375-3443-477d-bc0a-0384c5b6aaae",
            To: document.getElementById('email').value,
            From: "oleaga717@gmail.com",
            Subject: "EduNAO",
            Body: document.getElementById('message').value
        });
        
        document.getElementById("name").innerHTML = "";
        document.getElementById("email").innerHTML = "";
        document.getElementById("message").innerHTML = "";
    }
}
