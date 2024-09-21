// const no se puede reasignar, pero si se puede modificar los elementos dentro del array
const datos = [{  //array con la constante llamada datos y con campos id, titulo, año
    id: 1,
    titulo: 'Airon Man',
    año: 2008
}, {
    id: 2,
    titulo: 'Spaiderman: Homecoming',
    año: 2017
}, {
    id: 3,
    titulo: 'Advengers: Endgame',
    year: 2019
}];

//const getDatos = () => {
//  return datos;
//}


const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length === 0) {
            reject(new Error('No existen datos'))
        }
        setTimeout(() => {
            resolve(datos);
        }, 1500);
    });

}

//getDatos().then((datos) => console.log(datos));
async function Fdatos() {
    try {
        const datosF = await getDatos();

        console.log(datos);

        var json = JSON.parse('{"PRUEBAS1": 674}');
    } catch (err) {
        console.log(err.message);
    }finally{
        console.log('Finaliza bloque try catch')
    }

}
Fdatos();
