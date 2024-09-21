//ejecuta en orden, cada linea de codigo espera a que la anterior se complete
function funcionSincrona() {
    console.log("Inicio");

    for (let i = 0; i < 10; i++) { } //esto simula  una tarea pesada que toma tiempo
    console.log("Fin")
}
funcionSincrona();



//function funcionAsincrona(){
//console.log("Indice")
//setTimeout(() => {
//console.log("Tarea asincrona completada")
//}, 2000);

//console.log("Fin")
//}
//funcionAsincrona();


async function operacionAsincrona() {
    console.log("Inicio");

    const resultado = await new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Operacion completada")
        }, 5000);
    });

    console.log("Resultado: ", resultado)
    console.log("Fin");
}
