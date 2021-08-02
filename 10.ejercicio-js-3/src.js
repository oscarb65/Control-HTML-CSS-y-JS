"use-strict";

/* Función que detecta la base del número introducido y pasa el resultado a la función numberConverter */

function checkNumberBase(numb) {
   
    const numPbasetring = numb.toString();
    for (let i = 0; i < numPbasetring.length; i++) {
        if (numPbasetring[i] !== "1" && numPbasetring[i] !== "0") {
            return 10;
        }
    }
    return 2;
}


/* Le pasamos un nº en Binario el cual, deberá devolver su equivalente en Decimal, para ello la función deberá recibir un segundo parámetro que indique la base: 10 (Decimal) o 2 (Binario). */

function numberConverter(numb, Pbase) {
    let numbArray = [];
    let Nconvertido = 0;
    let base = checkNumberBase(numb);
    
    if (Pbase === 10) {
        base = 10;
    }

    switch (base) {
        case 2:
            /* Conversión de Binario a decimal */
            numbArray = String(numb)
                .split("")
                .reverse()
                .map((numb) => {
                    return Number(numb);
                });
            for (let i = 0; i < numbArray.length; i++) {
                Nconvertido += numbArray[i] * Math.pow(2, i);
            }
            break;

        case 10:
            /* Conversión de Decimal a Binario */
            while (numb >= 1) {
                if (numb % 2 === 0) {
                    numbArray.push("0");
                } else {
                    numbArray.push("1");
                }
                numb = Math.trunc(numb / 2);
            }
            numbArray.reverse();

            for (let i = 0; i < numbArray.length; i++) {
                if (numbArray[i] === "1") {
                    Nconvertido += Math.pow(10, numbArray.length - i - 1);
                }
            }
            break;
    }
   
    return Nconvertido;

}


/* Convierte de Decimal a Binario. */
console.log("A Binario", numberConverter(48) ); 
/* Convierte de Binario a Decimal. */
console.log("A Decimal ", numberConverter(11110101101)); 
/* Pasando parametros se puede convertir de Binario a Decimal y viceversa, siendo el primer parametro un numero Decimal en forma de ceros y unos o binario propiamente dicho */
console.log("Conversión ", numberConverter(111001, 2)); 
