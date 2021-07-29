
import {
    getEntriesByDate,
    getEntriesByDateAndCountry,
    getStats,
    getStatsByCountry,
    getRandomCountries
  } from './Modules/llamadasApi.js';

async function listCountries() {
    let countries = await getRandomCountries();
    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * 57000);
        var chBar = document.getElementById("chLine");
        var chartData = {
          labels: [''+countries[randomNumber].country.countriesAndTerritories+'',''+countries[2].country.countriesAndTerritories+''],
          datasets: [{
            data: [589, 445, 483, 503, 689, 692, 634],
            backgroundColor: colors[0]
          },
          {
            data: [209, 245, 383, 403, 589, 692, 580],
            backgroundColor: colors[1]
          },
          {
            data: [489, 135, 483, 290, 189, 603, 600],
            backgroundColor: colors[2]
          },
          {
            data: [639, 465, 493, 478, 589, 632, 674],
            backgroundColor: colors[4]
          }]
        };
        if (chBar) {
          new Chart(chBar, {
          type: 'bar',
          data: chartData,
          options: {
            scales: {
              xAxes: [{
                barPercentage: 0.4,
                categoryPercentage: 0.5
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: false
                }
              }]
            },
            legend: {
              display: false
            }
          }
          });
        }
    }
}
listCountries();