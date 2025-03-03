//Declaramos la variable

let calificacion = Number(prompt('Ingresa tu calificacion'));

//Realizamos la condicional

if(calificacion >0){
    if(calificacion >=90){
        console.log("Excelente");
    }else if(calificacion >=75 && calificacion <=89){
        console.log("Bien");
    }else if(calificacion >=60 && calificacion <=74){
        console.log("Suficiente");
    }else if(calificacion <60){
        console.log("No aprobaste");
    }
}else{
    console.log("Ingresa una calificacion valida");
    
}
