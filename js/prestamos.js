class Prestamo {
  constructor(
    id,
    nombreUsuarioPrestamo,
    montoSolicitar,
    motivoPrestamo,
    cuotas,
    totalConIntereses,
    cuotaConInteres
  ) {
    this.id_id;
    this.nombre = nombreUsuarioPrestamo;
    this.montoSolicitar = montoSolicitar;
    this.motivo = motivoPrestamo;
    this.cuotas = cuotas;
    this.totalConIntereses = totalConIntereses;
    this.cuotaConInteres = cuotaConInteres;
  }
  mostrarPrestamo() {
    return {
      nombre: this.nombre,
      montoSolicitar: this.montoSolicitar,
      motivo: this.motivo,
      cuotas: this.cuotas,
      totalConIntereses: this.totalConIntereses,
      cuotaConInteres: this.cuotaConInteres,
      date: this.date,
    };
  }
}

let contadorPrestamo = 1;

let prestamos =
  JSON.parse(localStorage.getItem("Prestamos"))?.map(
    (t) =>
      new Prestamo(
        t.nombre,
        t.montoSolicitar,
        t.motivo,
        t.cuotas,
        t.totalConIntereses,
        t.cuotaConInteres
      )
  ) || [];

function actualizarPrestamos() {
  localStorage.setItem("Prestamos", JSON.stringify(prestamos));
}

const validarDatos = document.getElementById("formularioPrestamo");

validarDatos.addEventListener("submit", (e) => {
  e.preventDefault();

  const usuarioValido = validarUsuario();
  const importeValido = validarImporte();

  if (usuarioValido && importeValido) {
    nuevoPrestamo();
  }
});

function validarUsuario() {
  const nombreUsuarioPrestamo = document.getElementById("usuario").value;
  const usuarioIncorrecto = document.getElementById("datoUsuarioIncorrecto");

  if (nombreUsuarioPrestamo === "" || !isNaN(nombreUsuarioPrestamo)) {
    usuarioIncorrecto.innerHTML =
      "El campo de nombre no puede estar vacio o ser numerico";
    document.getElementById("usuario").value = "";
  } else {
    usuarioIncorrecto.innerHTML = "";
  }

  return nombreUsuarioPrestamo;
}

function validarImporte() {
  const montoSolicitar = parseFloat(
    document.getElementById("importePrestamo").value
  );
  const importeIncorrecto = document.getElementById("datoImporteIncorrecto");

  if (
    isNaN(montoSolicitar) ||
    montoSolicitar <= 599 ||
    montoSolicitar > 30000
  ) {
    importeIncorrecto.innerHTML = "El ingreso debe ser un numero valido";
    document.getElementById("importePrestamo").value = "";
  } else {
    importeIncorrecto.innerHTML = "";
  }
  return montoSolicitar;
}

const motivoPrestamo = document.getElementById("motivo");
const cuotas = document.getElementById("cuotas");

function calcularImporteConIntereses(montoSolicitar, motivoPrestamo, cuotas) {
  let montoConInteres = 0;
  switch (motivoPrestamo) {
    case "Prestamo Personal":
      if (cuotas <= 6) {
        montoConInteres = montoSolicitar * 1.05;
      } else if (cuotas >= 7 && cuotas <= 24) {
        montoConInteres = montoSolicitar * 1.1;
      } else {
        montoConInteres = montoSolicitar * 1.15;
      }
      break;
    case "Prestamo Coche":
      if (cuotas <= 6) {
        montoConInteres = montoSolicitar * 1.065;
      } else if (cuotas >= 7 && cuotas <= 24) {
        montoConInteres = montoSolicitar * 1.075;
      } else {
        montoConInteres = montoSolicitar * 1.105;
      }
      break;
    case "Prestamo para reformas":
      if (cuotas <= 6) {
        montoConInteres = montoSolicitar * 1.05;
      } else if (cuotas >= 7 && cuotas <= 24) {
        montoConInteres = montoSolicitar * 1.06;
      } else {
        montoConInteres = montoSolicitar * 1.1;
      }
      break;
    default:
      break;
  }
  return montoConInteres;
}

function calcularCuotaConInteres(montoConInteres, cuotas) {
  pagoMensual = montoConInteres / cuotas;

  return pagoMensual;
}

function eliminarPrestamosGuardados() {
  localStorage.removeItem("Prestamos");
  prestamos = [];
  contadorPrestamo = 1;
}

const borrarPrestamos = document.getElementById("botonBorrarPrestamos");

borrarPrestamos.addEventListener("click", (e) => {
  e.preventDefault();
  eliminarPrestamosGuardados();
  document.getElementById("resultado").innerHTML = "";
  Toastify({
    text: "Se borraron todos los prestamos guardados",
    gravity: "top",
    duration: 3000,
    offset: { x: 30, y: 150 },
    style: {
      background: "#9b2f38",
    },
  }).showToast();
});

let crearPrestamo;

function nuevoPrestamo() {
  const nombreUsuarioPrestamo = validarUsuario();
  const montoSolicitar = validarImporte();
  const motivoPrestamo = document.getElementById("motivo").value;
  const cuotas = parseInt(document.getElementById("cuotas").value);

  if (nombreUsuarioPrestamo && montoSolicitar) {
    const montoConInteres = calcularImporteConIntereses(
      montoSolicitar,
      motivoPrestamo,
      cuotas
    );
    const pagoMensual = calcularCuotaConInteres(montoConInteres, cuotas);

    crearPrestamo = new Prestamo(
      contadorPrestamo++,
      nombreUsuarioPrestamo,
      montoSolicitar,
      motivoPrestamo,
      cuotas,
      montoConInteres,
      Math.round(pagoMensual)
    );

    prestamos.push(crearPrestamo);
    actualizarPrestamos();

    mostrarResultado(crearPrestamo);

    document.getElementById("formularioPrestamo").reset();
  }
}

function mostrarResultado(crearPrestamo) {
  Swal.fire({
    html: `<div class="tituloResultadoSweetAlert">
                     <h2>Estos son los resultados de tu prestamo</h2>
                     <h3>${crearPrestamo.nombre}</h3>
                   </div>
                   <div class="resultadoPrestamoSweetAlert">
                     <p><strong>Monto solicitado: </strong>${
                       crearPrestamo.montoSolicitar
                     }€</p>
                     <p><strong>Motivo del préstamo: </strong>${
                       crearPrestamo.motivo
                     }</p>
                     <p><strong>Cuotas: </strong>${crearPrestamo.cuotas}</p>
                     <p><strong>Total con intereses: </strong>${crearPrestamo.totalConIntereses.toFixed(
                       2
                     )}€</p>
                     <p><strong>Cuota mensual: </strong>${
                       crearPrestamo.cuotaConInteres
                     }€</p>
                   </div>`,
    icon: "success",
    width: `50%`,
  });
}

const botonVerPrestamos = document.getElementById("botonVerPrestamos");
const divResultado = document.getElementById("resultado");

botonVerPrestamos.addEventListener("click", () => {
  const prestamosGuardados = JSON.parse(localStorage.getItem("Prestamos"));

  divResultado.innerHTML = "";

  if (prestamosGuardados && prestamosGuardados.length > 0) {
    prestamosGuardados.forEach((Prestamo) => {
      const prestamosCalculados = `<div class="card">
                <div class="resultadoPrestamo">
                    
                    <p>Monto solicitado: ${Prestamo.montoSolicitar}€</p>
                    <p>Motivo del préstamo: ${Prestamo.motivo}</p>
                    <p>Cuotas: ${Prestamo.cuotas}</p>
                    <p>Total con intereses: ${Prestamo.totalConIntereses.toFixed(
                      2
                    )}€</p>
                    <p>Cuota mensual: ${Prestamo.cuotaConInteres}€</p>
                </div>
            </div>`;

      divResultado.innerHTML += prestamosCalculados;
      Toastify({
        text: "Debajo del formulario estan los prestamos guardados ↓",
        gravity: "bottom",
        duration: 3500,
        offset: { x: 30, y: 150 },
        style: {
          background: "#9b2f38",
        },
        stopOnFocus: true,
        position: "left",
      }).showToast();
    });
  } else {
    alert("No hay préstamos guardados.");
  }
});
