let enviarBtn = document.getElementById("enviar");
let resetBtn = document.getElementById("reset");
let form = document.getElementById("form");

let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");
let telefono = document.getElementById("telefono");
let tabla = document.getElementById("tabla");

const productos = [];
let contacto = [];

if ("contacto" in localStorage) {
  contacto = JSON.parse(localStorage.getItem("contacto"));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function borrarFormulario() {
  nombre.value = "";
  email.value = "";
  mensaje.value = "";
  telefono.value = "";
}
window.addEventListener("load", contenido);
window.addEventListener("load", cargarTabla);
resetBtn.addEventListener("click", borrarFormulario);

enviarBtn.addEventListener("click", enviarFormulario);

function enviarFormulario() {
  contacto.push(
    new Contacto(nombre.value, telefono.value, email.value, mensaje.value)
  );
  localStorage.setItem("contacto", JSON.stringify(contacto));
  alert("Formulario Enviado");
  cargarTabla();
  borrarFormulario();
}

function cargarTabla() {
  tabla.innerHTML = "";
  contenido();

  let contacLocal = JSON.parse(localStorage.getItem("contacto"));
  contacLocal.forEach((contact) => {
    const tr = document.createElement("tr");
    const tdNombre = document.createElement("td");
    tdNombre.innerText = contact.nombre;
    const tdTelefono = document.createElement("td");
    tdTelefono.innerText = contact.telefono;
    const tdEmail = document.createElement("td");
    tdEmail.innerText = contact.email;
    const tdMensaje = document.createElement("td");
    tdMensaje.innerText = contact.mensaje;
    tr.appendChild(tdNombre);
    tr.appendChild(tdTelefono);
    tr.appendChild(tdEmail);
    tr.appendChild(tdMensaje);
    tabla.appendChild(tr);
  });
}

productos.push(
  new Productos(1, "USB OPEN DMX", "control dmx", "./img/open.jpg"));
productos.push(
  new Productos(1, "USB OPEN OPTO", "control dmx", "./img/opto.jpg"));
productos.push(
  new Productos(1, "SPLITTER DMX 2 OUT", "control dmx", "./img/sp2out.jpg"));
productos.push(
  new Productos(1, "SPLITTER DMX 4 OUT", "control dmx", "./img/sp4out.jpg"));
productos.push(
  new Productos(1, "RGB DMX CONTROL 7CH", "control dmx", "./img/7ch.jpg"));
productos.push(
  new Productos(1, "RGB DMX CONTROL 17CH", "control dmx", "./img/17ch.jpg"));   




let card = document.getElementById("card-armado");
productos.map((x) => {
  card.innerHTML += `
    
    <div class="col">
        <div class="card">
            <img src="${x.img}" class="card-img-top" alt="${x.producto}">
            <div class="card-body">
            <h5 class="card-title text-center text-primary">${x.producto}</h5>
            <p class="card-text text-center">INDUSTRIA ARGENTINA</p>
            </div>
    </div>
            </div> `;
});

function contenido() {
  const trTitulo = document.createElement("tr");
  const thNombre = document.createElement("th");
  thNombre.innerText = "nombre";
  const thTelefono = document.createElement("th");
  thTelefono.innerText = "telefono";
  const thEmail = document.createElement("th");
  thEmail.innerText = "email";
  const thMensaje = document.createElement("th");
  thMensaje.innerText = "mensaje";
  trTitulo.appendChild(thNombre);
  trTitulo.appendChild(thTelefono);
  trTitulo.appendChild(thEmail);
  trTitulo.appendChild(thMensaje);
  tabla.appendChild(trTitulo);
}
