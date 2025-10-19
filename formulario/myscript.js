// Selector rápido tipo jQuery
function $(selector) {
    return document.querySelector(selector);
  }
  
  // Crear y mostrar alerta
  function myAlert(msg) {
    var div = document.createElement("div");
    div.classList.add("alert");
    div.innerHTML = msg;
  
    var close = document.createElement("span");
    close.classList.add("close");
    close.innerHTML = "X";
    close.onclick = function () {
      this.parentNode.remove();
    };
  
    div.appendChild(close);
    document.body.insertBefore(div, document.body.firstChild);
  }
  
  // Validación del formulario
  $("#form").addEventListener("submit", function (e) {
    e.preventDefault(); // evitar envío
  
    // Eliminar alertas anteriores
    var alerts = document.querySelectorAll(".alert");
    for (var i = 0; i < alerts.length; i++) {
      alerts[i].remove();
    }
  
    var errores = [];
  
    var nombre = $("[name='nombre']").value.trim();
    var apellido = $("[name='apellido']").value.trim();
    var email = $("[name='email']").value.trim();
    var telefono = $("[name='telefono']").value.trim();
    var dni = $("[name='dni']").value.trim();
    var password = $("[name='password']").value;
    var confirmPassword = $("[name='confirmPassword']").value;
    var fechaNacimiento = $("[name='fechaNacimiento']").value;
    var genero = $("[name='genero']").value;
    var terminos = $("[name='terminos']").checked;
  
    if (nombre === "") errores.push("El nombre es obligatorio.");
    if (apellido === "") errores.push("El apellido es obligatorio.");
    if (!/^[\w\.-]+@[\w\.-]+\.\w{2,}$/.test(email)) errores.push("Correo electrónico no válido.");
    if (!/^\d{9}$/.test(telefono)) errores.push("El teléfono debe contener solo números y tener 9 dígitos.");
    if (!/^\d{8}[A-Za-z]$/.test(dni)) errores.push("DNI debe tener formato 12345678X (8 números y una letra).");
    if (password.length < 6) errores.push("La contraseña debe tener al menos 6 caracteres.");
    if (password !== confirmPassword) errores.push("Las contraseñas no coinciden.");
    if (fechaNacimiento === "") errores.push("La fecha de nacimiento es obligatoria.");
    if (genero === "") errores.push("Debe seleccionar un género.");
    if (!terminos) errores.push("Debe aceptar los términos y condiciones.");
  
    if (errores.length > 0) {
      for (var i = 0; i < errores.length; i++) {
        myAlert(errores[i]);
      }
    } else {
      myAlert("Formulario enviado correctamente ✅");
      $("#form").reset();
    }
  });
  