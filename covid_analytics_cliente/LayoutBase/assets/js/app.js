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
      listData.innerHTML += `<li>Pais:${listados.data[i].country.countriesAndTerritories} Casos :${listados.data[i].cases}</li>`;
    }
     

  }
}

async function listCountries(){
  let countries = await getRandomCountries();
  let listCountries = document.getElementById('listCountries');
  for(let i = 0; i < 5; i++){
  let randomNumber = Math.floor(Math.random() * 57000);
  listCountries.innerHTML += `  <tr>
  <td>${countries[randomNumber].country_id}</td>
  <td>${countries[randomNumber].country.countriesAndTerritories}</td>
  <td><span class="label bg-green">${countries[randomNumber].country.geoId}</span></td>
  <td>${countries[randomNumber].dateRep}</td>
  <td>
      <div class="progress">
          <div class="progress-bar bg-green" id="barraRosa" role="progressbar" aria-valuenow="${countries[randomNumber].cases}" aria-valuemin="0" aria-valuemax="1000" style="width: ${countries[randomNumber].cases}%"></div>
      </div>
  </td>
</tr>`
}
}
listCountries();
let btnCalendar = document.getElementById('btnCalendar');
btnCalendar.addEventListener('click', listadoEntries, false);

