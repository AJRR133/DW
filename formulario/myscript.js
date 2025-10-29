function $(selector) {
  return document.querySelector(selector);
}

function mostrarErrores(errores) {
  const contenedor = $("#errores");
  contenedor.innerHTML = "";
  if (errores.length > 0) {
    const ul = document.createElement("ul");
    errores.forEach(err => {
      const li = document.createElement("li");
      li.textContent = err;
      ul.appendChild(li);
    });
    contenedor.appendChild(ul);
  }
}

function marcarError(selector) {
  const campo = document.querySelector(selector);
  campo.classList.add("error");
  campo.addEventListener("input", () => campo.classList.remove("error"));
}

$("#form").addEventListener("submit", function (e) {
  e.preventDefault();

  const errores = [];
  const nombre = $("[name='nombre']").value.trim();
  const apellido = $("[name='apellido']").value.trim();
  const email = $("[name='email']").value.trim();
  const telefono = $("[name='telefono']").value.trim();
  const dni = $("[name='dni']").value.trim();
  const password = $("[name='password']").value;
  const confirmPassword = $("[name='confirmPassword']").value;
  const fechaNacimiento = $("[name='fechaNacimiento']").value;
  const genero = $("[name='genero']").value;
  const direccion = $("[name='direccion']").value.trim();
  const ciudad = $("[name='ciudad']").value.trim();
  const codigoPostal = $("[name='codigoPostal']").value.trim();
  const web = $("[name='web']").value.trim();
  const terminos = $("[name='terminos']").checked;

  if (nombre === "") { errores.push("El nombre es obligatorio."); marcarError("[name='nombre']"); }
  if (apellido === "") { errores.push("El apellido es obligatorio."); marcarError("[name='apellido']"); }
  if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email)) { errores.push("Correo electrónico no válido."); marcarError("[name='email']"); }
  if (!/^\d{9}$/.test(telefono)) { errores.push("El teléfono debe tener 9 dígitos."); marcarError("[name='telefono']"); }

  if (!/^[0-9]{8}[A-Za-z]$/.test(dni)) {
    errores.push("El DNI debe tener 8 números y una letra (ejemplo: 12345678X).");
    marcarError("[name='dni']");
  }

  if (password.length < 6) { errores.push("La contraseña debe tener al menos 6 caracteres."); marcarError("[name='password']"); }
  if (password !== confirmPassword) { errores.push("Las contraseñas no coinciden."); marcarError("[name='confirmPassword']"); }
  if (fechaNacimiento === "") { errores.push("Debe ingresar su fecha de nacimiento."); marcarError("[name='fechaNacimiento']"); }
  if (genero === "") { errores.push("Debe seleccionar un género."); marcarError("[name='genero']"); }
  if (direccion === "") { errores.push("Debe ingresar su dirección."); marcarError("[name='direccion']"); }
  if (ciudad === "") { errores.push("Debe ingresar su ciudad."); marcarError("[name='ciudad']"); }
  if (!/^\d{5}$/.test(codigoPostal)) { errores.push("Código postal inválido."); marcarError("[name='codigoPostal']"); }
  if (web && !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(web)) { errores.push("La URL personal no es válida."); marcarError("[name='web']"); }
  if (!terminos) { errores.push("Debe aceptar los términos y condiciones."); marcarError("[name='terminos']"); }

  mostrarErrores(errores);

  if (errores.length === 0) {
    const success = document.createElement("div");
    success.classList.add("alert", "success");
    success.textContent = "✅ Formulario enviado correctamente";
    document.body.insertBefore(success, document.body.firstChild);
    $("#form").reset();
  }
});

