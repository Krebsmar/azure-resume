window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getkrebsmarresumecounter.azurewebsites.net/api/GetResumeCounter?code=IdaoNz3MLhuqjQ7Myq5fxhgwg8nzF9GA1t/L4o4653PDgRfv0nDRxQ==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response =>{
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    })
    return count;
}