// console.log("hola estupidos")
// const getNombreContinent = (idConti) => {
//     fetch(`https://proyecto4-grupo1-covid-analytics.test/api/regions/${idConti}`)
//     .then(res => {
//         return res.json();
//     })
//     .then(regions => {
//         console.log(regions);
//     })
// }
// getNombreContinent(1);
async function listado(){
    return await apiCall('GET','https://proyecto4-grupo1-covid-analytics.test/api/entries',null)
    
}

const apiCall = async(method, url) =>{
    let config = {
        method: method,
        url: url,
        
    }
    
  const response = await axios(config);

return response.data;

}

async function prueba(){
    let listados = await listado();
    console.log(listados.entries)
 for(let i = 0; i < 100; i++){
   if(  listados.entries[i].day == 1 &&  listados.entries[i].year == 2020 ){
    document.getElementById('prueba').innerHTML += `<li> ${listados.entries[i].day}</li><li>${listados.entries[i].year }`;
   }
 
 }
    

}

prueba()
