import {
    getEntriesByDate,
    getEntriesByDateAndCountry,
    getStats,
    getStatsByCountry,
    getRandomCountries
  } from '../../Modules/llamadasApi.js';


  async function listCountries() {
    let advert = document.getElementById('advert');
    let calendar = document.getElementById('calendar').value;
    if (calendar == '') {
      advert.innerHTML = `<div class="alert alert-warning" role="alert">
     No hay datos con la fecha seleccionada
   </div>`
      setTimeout(
        function () {
          advert.innerHTML = ''
        }, 3000);
    }
    else if (calendar !== undefined) {
      let result = calendar.split('-');
      for (let i = 2; i--;)
        result[i] = ("-" + result[i]);
      result = result.reverse().join('')
    let countries = await getEntriesByDate(result);
    let labels = [];
    for (let i = 0; i < 10; i++) {
        labels.push(countries.data[i])
        
        

    }

    
$(function () {
    new Chart(document.getElementById("line_chart").getContext("2d"), getChartJs('line'));
    new Chart(document.getElementById("bar_chart").getContext("2d"), getChartJs('bar'));
    new Chart(document.getElementById("radar_chart").getContext("2d"), getChartJs('radar'));
    new Chart(document.getElementById("pie_chart").getContext("2d"), getChartJs('pie'));
});

function getChartJs(type) {
    var config = null;

    if (type === 'line') {
        config = {
            type: 'line',
            data: {
                labels: [''+labels[0].country.countriesAndTerritories+'',''+labels[1].country.countriesAndTerritories+'',''+labels[2].country.countriesAndTerritories+'',''+labels[3].country.countriesAndTerritories+'',''+labels[4].country.countriesAndTerritories+'',''+labels[5].country.countriesAndTerritories+'',''+labels[6].country.countriesAndTerritories+''],
                datasets: [{
                    label: "Deaths",
                    data: [labels[0].deaths, labels[1].deaths, labels[2].deaths, labels[3].deaths, labels[4].deaths, labels[5].deaths, labels[6].deaths],
                    borderColor: 'rgba(0, 188, 212, 0.75)',
                    backgroundColor: 'rgba(0, 188, 212, 0.3)',
                    pointBorderColor: 'rgba(0, 188, 212, 0)',
                    pointBackgroundColor: 'rgba(0, 188, 212, 0.9)',
                    pointBorderWidth: 1
                }, {
                        label: "Cases",
                        data: [labels[0].cases, labels[1].cases, labels[2].cases, labels[3].cases, labels[4].cases, labels[5].cases, labels[6].cases],
                        borderColor: 'rgba(233, 30, 99, 0.75)',
                        backgroundColor: 'rgba(233, 30, 99, 0.3)',
                        pointBorderColor: 'rgba(233, 30, 99, 0)',
                        pointBackgroundColor: 'rgba(233, 30, 99, 0.9)',
                        pointBorderWidth: 1
                    }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
    else if (type === 'bar') {
        config = {
            type: 'bar',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: 'rgba(0, 188, 212, 0.8)'
                }, {
                        label: "My Second dataset",
                        data: [28, 48, 40, 19, 86, 27, 90],
                        backgroundColor: 'rgba(233, 30, 99, 0.8)'
                    }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
    else if (type === 'radar') {
        config = {
            type: 'radar',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    data: [65, 25, 90, 81, 56, 55, 40],
                    borderColor: 'rgba(0, 188, 212, 0.8)',
                    backgroundColor: 'rgba(0, 188, 212, 0.5)',
                    pointBorderColor: 'rgba(0, 188, 212, 0)',
                    pointBackgroundColor: 'rgba(0, 188, 212, 0.8)',
                    pointBorderWidth: 1
                }, {
                        label: "My Second dataset",
                        data: [72, 48, 40, 19, 96, 27, 100],
                        borderColor: 'rgba(233, 30, 99, 0.8)',
                        backgroundColor: 'rgba(233, 30, 99, 0.5)',
                        pointBorderColor: 'rgba(233, 30, 99, 0)',
                        pointBackgroundColor: 'rgba(233, 30, 99, 0.8)',
                        pointBorderWidth: 1
                    }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
    else if (type === 'pie') {
        config = {
            type: 'pie',
            data: {
                datasets: [{
                    data: [225, 50, 100, 40],
                    backgroundColor: [
                        "rgb(233, 30, 99)",
                        "rgb(255, 193, 7)",
                        "rgb(0, 188, 212)",
                        "rgb(139, 195, 74)"
                    ],
                }],
                labels: [
                    "Pink",
                    "Amber",
                    "Cyan",
                    "Light Green"
                ]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
    return config;
}
    }
    }

let btnCalendar = document.getElementById('btnCalendar');
btnCalendar.addEventListener('click', listCountries, false);