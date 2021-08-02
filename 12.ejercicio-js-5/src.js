"use-strict";

const urlRaM = "https://rickandmortyapi.com/api/episode";

console.log(urlRaM)
 fetch(urlRaM)
 .then(response => response.json())
 .then(data => mostrarData(data))
 .catch(error => console.log(error))

 const mostrarData = (data) => {
     console.log(data)
    let body = ''
    for (let i = 0; i<data.length; i++) {
        body += "<tr><td>${data[i].air_date}";
        console.log(data.air_date);

    }
    
 }

 