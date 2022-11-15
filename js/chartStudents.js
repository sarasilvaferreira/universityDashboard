var years = [2017,2018,2019,2020,2021,2022];
var students = [3011,3023,2492,2320,2126,2200];

new Chart("chartStudentsEvolution", {
  type: "line",
  data: {
    labels: years,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "red",
      borderColor: "#144b5d",
      data: students
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 2000, max:3400}}],
    }
  }
});
