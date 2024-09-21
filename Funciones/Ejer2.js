async function ejemplo() {
    console.log("Inicio")

    //simular una tarea que tarda 2 segunsdos
    const resultado = await new Promise(resolve => {
        setTimeout(() => {
            resolve("Tarea completada")
        }, 2000);
    });

    console.log(resultado);  //esto se ejecutara después de que la promesa se resuelva
    console.log("Fin");
}
ejemplo();