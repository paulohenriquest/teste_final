new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: [" ", " ", " ",],
      datasets: [{
        label: " ",
        backgroundColor: ["#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734]
      }]
    },
    options: {
      title: {
        display: true,
        text: ' '
      }
    }
});


/*CHART VERTICAL */

new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["", " ", " ", " ", " "],
      datasets: [
        {
          label: "",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: ''
      }
    }
});
/* CHART HORIZONTAL*/
new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: [" ", " ", " ", " ", " "],
      datasets: [
        {
          label: "",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: false,
        text: ''
      }
    }
});
