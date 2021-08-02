"use strict";
/* url en donde extraemos los datos a utilizar en el Array */

const arUrluser = "https://randomuser.me/api";
let U_Array = [];

/* La función recupera información de la API y lo convierte en un objeto (Datos) */

async function getData(url) {
    const Resp = await fetch(url);
    const datos = await Resp.json();
    return datos
}

async function createUserArray(url, N_Usuario, salidaArray) {
    for (let i = 0; i < N_Usuario; i++) {
        const datos = await getData(url);
        const results = datos.results[0];
        const U_nuevo = {
            Usuario: results.login.username,
            Nombre: results.name.first,
            Apellido: results.name.last,
            Género: results.gender,
            País: results.location.country,
            Correo: results.email,
            Foto : results.picture.medium
        }
        salidaArray.push(U_nuevo);
        /* Crea el Arreglo con los Datos obtenidos */
    }
}

createUserArray(arUrluser, 8, U_Array);

/* Muestra en la consola resultados de los Datos (objeto) */

console.log(U_Array);