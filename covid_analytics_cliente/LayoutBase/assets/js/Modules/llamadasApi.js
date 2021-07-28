
const hostName = 'https://proyecto4-grupo1-covid-analytics.test/api/entries';

async function getEntriesByDate(date){
    return await apiCall('GET',hostName +'/byDate/'+ date +'',null)
    
}
async function getEntriesByDateAndCountry(date,id){
    return await apiCall('GET',hostName +'/byDate/'+ date +'/byCountry/'+ id +'',null)
    
}
async function getStats(){
    return await apiCall('GET',hostName +'/stats',null)
    
}
async function getStatsByCountry(countryId){
    return await apiCall('GET',hostName +'/stats/byCountry/'+ countryId +'',null)
    
}


const apiCall = async(method, url) =>{
    let config = {
        method: method,
        url: url,
        
    }
    
  const response = await axios(config);

return response.data;

}

export{
    getEntriesByDate,
    getEntriesByDateAndCountry,
    getStats,
    getStatsByCountry
}