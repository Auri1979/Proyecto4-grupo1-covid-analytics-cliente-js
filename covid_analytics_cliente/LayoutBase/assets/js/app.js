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

    let listados = await getEntriesByDate(result);
    for (let i = 0; i < 150; i++) {
    
  let listCountries = document.getElementById('listCountries');
 
 
  listCountries.innerHTML += `  <tr>
  <td>${listados.data[i].country_id}</td>
  <td>${listados.data[i].country.countriesAndTerritories}</td>
  <td><span class="label bg-green">${listados.data[i].country.geoId}</span></td>
  <td>${listados.data[i].dateRep}</td>
  <td>
      <div class="progress">
          <div class="progress-bar bg-green" id="barraRosa" role="progressbar" aria-valuenow="${listados.data[i].cases}" aria-valuemin="0" aria-valuemax="1000" style="width: ${listados.data[i].cases}%"></div>
      </div>
  </td>
</tr>`
}

  }
  
}


let btnCalendar = document.getElementById('btnCalendar');
btnCalendar.addEventListener('click', listadoEntries, false);

