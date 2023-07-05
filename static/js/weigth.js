function sumarYDividir() {
    var total = 0;
    for (var i = 1; i <= 10; i++) {
      var numero = parseInt(document.getElementById("numero" + i).value);
      if (!isNaN(numero)) {
        total += numero;
      }
    }
    
    for (var i = 1; i <= 10; i++) {
      var numeroAnterior = parseInt(document.getElementById("numero" + i).value);
      var division = (numeroAnterior / total) * 100;
      if (isNaN(division)) {
        division = 0; // Establecer el valor en 0 si la división no es un número válido
      }
      document.getElementById("division" + i).value = division.toFixed(2) + "%"; // Mostrar el resultado en porcentaje con 2 decimales
    }
  }
  