import listado from './Modules/llamadasApi.js';

async function listadoEntries(){
    let listados = await listado();
    console.log(listados.entries)
 for(let i = 0; i < 100; i++){
   if(  listados.entries[i].day == 1 &&  listados.entries[i].year == 2020 ){
    document.getElementById('prueba').innerHTML += `<li> ${listados.entries[i].day}</li><li>${listados.entries[i].year }`;
   }
 
 }
    

}

listadoEntries()
