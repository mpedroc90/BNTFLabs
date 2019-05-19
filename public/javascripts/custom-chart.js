function CustomChartModule() {
  let myChart;
  function createGraph(ctx, data) {
    let back = [
      "rgb(255, 99, 132)",
      "rgb(54, 162, 235)",
      "rgb(255, 206, 86)",
      "rgb(75, 192, 192)",
      "rgb(153, 102, 255)",
    ];
    myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(data),
        datasets: [
          {
            label: "Skills",
            data: Object.values(data),
            backgroundColor: [...Array(Object.keys(data).length).keys()].map(
              i => back[i % back.length]
            ),
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  return {
    create: function(ctx, data) {
      if (!!myChart) {
        myChart.destroy();
      }
      createGraph(ctx, data);
    },
  };
}
