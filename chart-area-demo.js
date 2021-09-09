let filename = 'data/city.csv';

// all of your code should be inside this command
d3.csv(filename).then(function(loadedData) {
  
  // let's see if our data loaded correctly
  // (and take a peek at how it's formatted)
  console.log(loadedData);
  
  // empty lists for our data and the labels
  let data =   [];
  let labels = [];
  
  // use a for-loop to load the data from the
  // file into our lists
  for (let i=0; i<loadedData.length; i++) {
    console.log(loadedData[i]);
    
    // get the year and mean temp for each listing
    // note: the 'keys' here correspond to the headers
    // in our file and need to be typed exactly
    let cidade =     loadedData[i].cidade;
    let populacao = loadedData[i].populacao;
    console.log(populacao);
    
    // add the year to our labels
    labels.push(cidade);
    
    // and mean temp to the data
    data.push(populacao);    
  }
  
  
var ctx = document.getElementById('myAreaChart').getContext("2d");

var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, '#fc8f5a');
gradientStroke.addColorStop(1, '#f58854');

var gradientFill = ctx.createLinearGradient(0, 0, 0, 200);
gradientFill.addColorStop(0, 'rgba(251, 158,29, 0.5)');
gradientFill.addColorStop(0.2, 'rgba(255, 158, 29, 0.25)');
gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0)');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: "",
            borderColor: gradientStroke,
            pointBorderColor: '#fcb149',
            pointBackgroundColor: '#fff',
         
           pointBorderWidth: 5,
           pointRadius: 5,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 4,
            data: data
        }]
    },
    options: {
        animation: {
            easing: "easeInOutBack"
        },
        legend: {
            position: "bottom",
           display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 15
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }

            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 10,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }]
        }
    }
});

});








