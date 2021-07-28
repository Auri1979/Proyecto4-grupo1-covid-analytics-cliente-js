import {
  getEntriesByDate,
  getEntriesByDateAndCountry,
  getStats,
  getStatsByCountry
} from './Modules/llamadasApi.js';

async function listadoEntries() {
 let calendar = document.getElementById('calendar').value;
 let result = calendar.split('-');
 for (let i = 2; i--;)
 result[i]=("-"+ result[i]);
 result = result.reverse().join('')
 console.log( calendar)
 
  let listados = await getEntriesByDate(result);
  console.log(listados.data)
    for (let i = 0; i < 150; i++) {
     document.getElementById('prueba').innerHTML += `<li>Pais:${listados.data[i].country.countriesAndTerritories} Casos :${listados.data[i].cases}</li>`;
     

    }
  

}
let pruebamax = document.getElementById('calendar');
pruebamax.addEventListener('click',listadoEntries,false);
// listadoEntries()
