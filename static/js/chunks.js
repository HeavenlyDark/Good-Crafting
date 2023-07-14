// Obtener el contexto del lienzo
var ctx = document.getElementById('plano').getContext('2d');

// Configurar los datos del plano cartesiano
var data = {
  labels: ['X', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [{
    label: 'Y',
    data: [],
    borderWidth: 1,
    borderColor: 'red',
    pointBackgroundColor: 'red',
    pointBorderColor: 'red',
    pointRadius: 3,
    fill: false
  }]
};

// Configurar opciones del gráfico
var options = {
  scales: {
    x: {
      display: true,
      ticks: {
        display: false
      }
    },
    y: {
      display: true,
      ticks: {
        display: false
      }
    }
  }
};

// Crear el gráfico de tipo scatter
var chart = new Chart(ctx, {
  type: 'scatter',
  data: data,
  options: options
});

// Función para agregar un punto al plano cartesiano
function agregarPunto(x, y) {
  chart.data.datasets[0].data.push({x: x, y: y});
  chart.update();
}

// Agregar puntos de ejemplo al plano cartesiano
agregarPunto(2, 4);
agregarPunto(-3, 1);
agregarPunto(5, -2);
agregarPunto(-1, -3);