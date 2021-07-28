import {
  getEntriesByDate,
  getEntriesByDateAndCountry,
  getStats,
  getStatsByCountry
} from './Modules/llamadasApi.js';

async function listadoEntries() {
 
  let listados = await getStatsByCountry(8);
  console.log(listados.data)
  //  for (let i = 0; i < listados.length; i++) {
     document.getElementById('prueba').innerHTML += `<li> ${listados.data.country_name}</li><li> ${listados.data.deaths}</li><li> ${listados.data.cases}</li>`;
    

  //  }
  

}

listadoEntries()
