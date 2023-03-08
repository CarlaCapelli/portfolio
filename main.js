let boton = document.getElementById("enviar");
let mensNombre = document.getElementById("msjNombre");
let mensCorreo = document.getElementById("msjMail");
let mensConsulta = document.getElementById("msjConsulta");
let mensEnvio = document.getElementById("envio");
let enviarConsulta = () => {
  boton.addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    if (nombre === "") {
      mensNombre.innerHTML = "*Debe ingresar nombre";
    } else {
      mensNombre.innerHTML = "";
    }
    let correo = document.getElementById("mail").value;
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(correo)) {
      mensCorreo.innerHTML = "*Correo incorrecto";
    } else {
      mensCorreo.innerHTML = "";
    }
    let consulta = document.getElementById("msg").value;
    if (consulta === "") {
      mensConsulta.innerHTML = "*Debe ingresar una consulta";
    } else {
      mensConsulta.innerHTML = "";
    }
    if (nombre !== "" && expr.test(correo) && consulta !== "") {
      let formulario = document.getElementById("form");
      formulario.classList.add("none");
      mensEnvio.innerHTML = "Consulta enviada";
      setTimeout(function () {
        formulario.classList.remove("none");
        mensEnvio.innerHTML = "";
      }, 3000);
      formulario.reset();
    }
  });
};

enviarConsulta();
