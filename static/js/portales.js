// Obtener los elementos del Grupo 1
var grupo1Casillero1 = document.getElementById("grupo1Casillero1");
var grupo1Casillero2 = document.getElementById("grupo1Casillero2");
var grupo1Casillero3 = document.getElementById("grupo1Casillero3");
var grupo1CasilleroTexto = document.getElementById("grupo1CasilleroTexto");

// Obtener los elementos del Grupo 2
var grupo2Casillero1 = document.getElementById("grupo2Casillero1");
var grupo2Casillero2 = document.getElementById("grupo2Casillero2");
var grupo2Casillero3 = document.getElementById("grupo2Casillero3");
var grupo2CasilleroTexto = document.getElementById("grupo2CasilleroTexto");

// Función para actualizar el Grupo 1
function actualizarGrupo1() {
  var valores = grupo1Casillero1.value.split(" ");
  if (valores.length === 3) {
    grupo1Casillero1.value = valores[0];
    grupo1Casillero2.value = valores[1];
    grupo1Casillero3.value = valores[2];
  }

  var valor1 = parseFloat(grupo1Casillero1.value) || 0;
  var valor2 = parseFloat(grupo1Casillero2.value) || 0;
  var valor3 = parseFloat(grupo1Casillero3.value) || 0;

  grupo1CasilleroTexto.textContent = valor1 + " " + valor2 + " " + valor3;

  // Actualizar los valores del Grupo 2
  grupo2Casillero1.value = valor1 / 8;
  grupo2Casillero2.value = valor2;
  grupo2Casillero3.value = valor3 / 8;
  actualizarGrupo2();
}

// Función para actualizar el Grupo 2
function actualizarGrupo2() {
  var valores = grupo2Casillero1.value.split(" ");
  if (valores.length === 3) {
    grupo2Casillero1.value = valores[0];
    grupo2Casillero2.value = valores[1];
    grupo2Casillero3.value = valores[2];
  }

  var valor1 = parseFloat(grupo2Casillero1.value) || 0;
  var valor2 = parseFloat(grupo2Casillero2.value) || 0;
  var valor3 = parseFloat(grupo2Casillero3.value) || 0;

  grupo2CasilleroTexto.textContent = valor1 + " " + valor2 + " " + valor3;

  // Actualizar los valores del Grupo 1
  grupo1Casillero1.value = valor1 * 8;
  grupo1Casillero2.value = valor2;
  grupo1Casillero3.value = valor3 * 8;
  actualizarGrupo1();
}

// Función para copiar el contenido del elemento identificado por su ID
function copiarContenido(elementId) {
  var elemento = document.getElementById(elementId);
  var range = document.createRange();
  range.selectNode(elemento);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

// Evento para detectar pegado de texto en los casilleros del Grupo 1
grupo1Casillero1.addEventListener("input", function(event) {
  var valores = grupo1Casillero1.value.split(" ");
  if (valores.length === 3) {
    grupo1Casillero1.value = valores[0];
    grupo1Casillero2.value = valores[1];
    grupo1Casillero3.value = valores[2];
    actualizarGrupo1();
  }
});

grupo1Casillero2.addEventListener("input", function(event) {
  actualizarGrupo1();
});

grupo1Casillero3.addEventListener("input", function(event) {
  actualizarGrupo1();
});

// Evento para detectar pegado de texto en los casilleros del Grupo 2
grupo2Casillero1.addEventListener("input", function(event) {
  var valores = grupo2Casillero1.value.split(" ");
  if (valores.length === 3) {
    grupo2Casillero1.value = valores[0];
    grupo2Casillero2.value = valores[1];
    grupo2Casillero3.value = valores[2];
    actualizarGrupo2();
  }
});

grupo2Casillero2.addEventListener("input", function(event) {
  actualizarGrupo2();
});

grupo2Casillero3.addEventListener("input", function(event) {
  actualizarGrupo2();
});
