
/** CHART VERTICAL*/
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: [" ", " ", " ", " ", " ", " ", " ", " "],
      datasets: [
        {
          label: " ",
          backgroundColor: ["rgb(238, 135, 17)","rgb(247, 72, 72)","rgb(238, 135, 17)","rgb(247, 72, 72)","rgb(238, 135, 17)","rgb(247, 72, 72)","rgb(238, 135, 17)","rgb(247, 72, 72)"],
          data: [70,80,89,90,85,93,95,89]
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
/**CHART PIE */
new Chart(document.getElementById("pie-chart"), {
  type: 'pie',
  data: {
    labels: [" ", " ", " "],
    datasets: [{
      label: " ",
      backgroundColor: ["#04c304", "#378af7","#ff4500"],
      data: [39,52,52]
    }]
  },
  options: {
    title: {
      display: true,
      text: ' '
    }
  }
});

/*CHART LINE */

// new Chart(document.getElementById("line-chart"), {
//   type: 'line',
//   data: {
//     labels: [-50,-40,-30,-20,-10,0,10,20,30,40,50],
//     datasets: [{ 
//         data: [5,6,4,4,9,11,3,-5,-9,-13,-18],
//         label: "Paypal",
//         borderColor: "#ff0000",
//         fill: false
//       }, { 
//         data: [3,-2,1,1,-5,2,3,5,3,2,18],
//         label: "Gumroad",
//         borderColor: "#adff2f",
//         fill: false
//       }, { 
//         data: [3,5,4,1,6,3,5,5,8,12,18],
//         label: "Others",
//         borderColor: "#8f2eff",
//         fill: false
//       }, 
//     ]
//   },
//   options: {
//     title: {
//       display: true,
//       text: ""
//     }
//   }
// });


var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: [-50,-40,-30,-20,-10,0,10,20,30,40,50],
            datasets: [{ 
                data: [5,6,4,4,9,11,3,-5,-9,-13,-18],
                label: "Paypal",
                borderColor: "#ff0000",
                backgroundColor: "#7bb6dd",
                fill: true,
              }, { 
                data: [3,-2,1,1,-5,2,3,5,3,2,18],
                label: "Gumroad",
                borderColor: "#adff2f",
                backgroundColor: "#71d1bd",
                fill: true,
              }, { 
                data: [3,5,4,1,6,3,5,5,8,12,18],
                label: "Others",
                borderColor: "#8f2eff",
                backgroundColor:"#ffc04d",
                fill: true,
              },
            ]
          },
        });