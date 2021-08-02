"use strict";
/* Se Declara las Variables que intervienen */
let segundos = 0;
let minutos = 0;
let horas = 0;
let dias = 0;

/* Se ejecuta una función pasado un cierto intervalo de tiempo */

 const intervalo = setInterval(() => clock(), 1000); 
 
function clock() {
    segundos++;
    if (segundos === 60) {
        minutos++;
        segundos = 0;
    }
    if (minutos === 60) {
        horas++;
        minutos = 0;
    }
    if (horas === 24) {
        dias++;
        horas = 0;
        /* Se Formatea el tiempo para que se muestren los segundos, los minutos, las horas y los días desde la ejecución del mismo */
    }
        /* Se pasa a la constante el tiempo Transcurrido */

    const tiempoTras = `Han pasado ${dias} dias, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
    
    if (segundos % 5 === 0) {
       
        /* Luego de 5 segundos Imprime el Resultado */

        console.log(tiempoTras);

        }

    /* Agrgamos un plus, de final de ejecucion del programa luego de transcurrir 90 segundos para validar un tope de tiempo

    setTimeout("clearInterval("+intervalo+")",60000); */
      
}

  