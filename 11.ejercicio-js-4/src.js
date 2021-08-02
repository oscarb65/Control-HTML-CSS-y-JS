'use-strict';

// Array de Ejemplo de datos Repetidos

const datosArr = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

/* El objeto global Set es una estructura de datos, que permite sólo almacenar valores únicos de cualquier */

const unicos = new Set(datosArr);

    let resultado = [...unicos];

    console.log(resultado);
