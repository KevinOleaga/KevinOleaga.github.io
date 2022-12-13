estado = 0;

function validarCampos() {
    if (!document.getElementById("name").value == "") {
        estado = 1,
        alert("name " + estado)
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El espacio "Nombre" no puede estar vacío'
        })
        estado = 0;
        alert("name2 " + estado)
    }

    if (!document.getElementById("email").value == "") {
        estado = 1;
        alert("email " + estado)
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El espacio "email" no puede estar vacío'
        })
        estado = 0;
        alert("email2 " + estado)
    }

    if (!document.getElementById("message").value == "") {
        estado = 1;
        alert("message " + estado)
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El espacio "Mensaje" no puede estar vacío'
        })
        estado = 0;
        alert("message2 " + estado)
    }
}

function sendEmail() {
    validarCampos()
    alert(estado)
    if (estado === 1) {
        alert("aber")
        Email.send({
            SecureToken: "2c1fa375-3443-477d-bc0a-0384c5b6aaae",
            To: document.getElementById('email').value,
            From: "oleaga717@gmail.com",
            Subject: "EduNAO",
            Body: document.getElementById('message').value
        }).then(
            window.location.href = "index.html",
            alert("hola")
        );
    }
}
