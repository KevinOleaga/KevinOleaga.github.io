estado = "";

function validarCampos() {
    if (!document.getElementById("name").value == "") {
        estado = "OK";
    } else {
        estado = "FAIL_NAME";
    }

    if (!document.getElementById("email").value == "") {
        estado = "OK";
    } else {
        estado = "FAIL_EMAIL";
    }

    if (!document.getElementById("message").value == "") {
        estado = "OK";
    } else {
        estado = "FAIL_MESSAGE";
    }

    switch (estado) {
        case "FAIL_NAME":
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El espacio "Nombre" no puede estar vacío'
            })
            break;
        case "FAIL_EMAIL":
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El espacio "email" no puede estar vacío'
            })
            break;
        case "FAIL_MESSAGE":
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El espacio "Mensaje" no puede estar vacío'
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
        }).then(
            window.location.href = "index.html",
        );
    }
}
