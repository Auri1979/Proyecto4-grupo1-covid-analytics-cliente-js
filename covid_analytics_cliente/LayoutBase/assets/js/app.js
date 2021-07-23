console.log("hola estupidos")
const getNombreContinent = (idConti) => {
    fetch(`https://proyecto4-grupo1-covid-analytics.test/api/regions/${idConti}`)
    .then(res => {
        return res.json();
    })
    .then(regions => {
        console.log(regions);
    })
}
getNombreContinent(1);