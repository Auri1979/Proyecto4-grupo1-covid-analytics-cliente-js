
const hostName = 'https://proyecto4-grupo1-covid-analytics.test/api/';

async function listado(){
    return await apiCall('GET',URL +'entries',null)
    
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
    listado
}