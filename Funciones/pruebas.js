class Administar {
    constructor() {
        
    }

    metodoAdm(nombre, edad){
        console.log(nombre,edad);
        if( edad >= 18){
            console.log("Eres mayor de edad");
        }else{
            console.log("Eres menor de edad");
        }
    } 
}

let objAdministar = new Administar();
objAdministar.metodoAdm("Juan", 17);
objAdministar.metodoAdm("Geral", 25);


setInterval(() =>{
    console.log("PruebasInterval");
},2000);

setTimeout(()=>{
    console.log("PruebasSetimeout")
},3000)