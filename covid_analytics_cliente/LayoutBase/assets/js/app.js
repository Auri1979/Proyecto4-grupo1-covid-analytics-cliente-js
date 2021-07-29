import {
  getEntriesByDate,
  getEntriesByDateAndCountry,
  getStats,
  getStatsByCountry,
  getRandomCountries
} from './Modules/llamadasApi.js';

async function listadoEntries() {
  let listData = document.getElementById('listData');
  let calendar = document.getElementById('calendar').value;
  let countryId = document.getElementById('country').value;
  if (calendar == '') {
    listData.innerHTML = `<div class="alert alert-warning" role="alert">
   No hay datos con la fecha seleccionada
 </div>`
    setTimeout(
      function () {
        listData.innerHTML = ''
      }, 3000);
  }
  else if (calendar !== undefined) {
    let result = calendar.split('-');
    for (let i = 2; i--;)
      result[i] = ("-" + result[i]);
    result = result.reverse().join('')

    let listados = await getEntriesByDateAndCountry(result, countryId);
  
    
  let listCountries = document.getElementById('listCountries');
 
  listCountries.innerHTML = '';
  listCountries.innerHTML += `  <tr>
  <td>${listados.data[0].country_id}</td>
  <td>${listados.data[0].country.countriesAndTerritories}</td>
  <td><span class="label bg-green">${listados.data[0].country.geoId}</span></td>
  <td>${listados.data[0].dateRep}</td>
  <td>${listados.data[0].cases}</td>
  <td>${listados.data[0].deaths}</td>
  
  
</tr>`
}

  
  
}

async function countryStat(){
  let countryId = document.getElementById('country').value;
  let statsCountry = await getStatsByCountry(countryId);
  console.log(statsCountry)
  let listCountries = document.getElementById('listData');
 
 listCountries.innerHTML = '';
  listCountries.innerHTML += `  <tr>
  <td><h1>${statsCountry.data.country_name} </h1><br></td>
  <td>Un total de casos -> ${statsCountry.data.cases}<br></td>
  <td>Un total de muertes -> ${statsCountry.data.deaths}</td>
  
  
  
</tr>`
}


let btnSum = document.getElementById('btnSum');
btnSum.addEventListener('click', countryStat, false);

let btnCalendar = document.getElementById('btnCalendar');
btnCalendar.addEventListener('click', listadoEntries, false);

