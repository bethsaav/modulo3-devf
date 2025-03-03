//Declaramos la variable

let calificacion = Number(prompt('Ingresa tu calificacion'));

//Realizamos los condicionales

if(calificacion >0){
    if(calificacion >=90){
        console.log("Excelente, ¡Felicidades!");
    }else if(calificacion >=75 && calificacion <=89){
        console.log("Bien, sigue asi");
    }else if(calificacion >=60 && calificacion <=74){
        console.log("Suficiente, puedes mejorar");
    }else if(calificacion <60){
        console.log("No aprobaste, esfuerzate mas");
    }
}else{
    console.log("Ingresa una calificacion valida");
    
}
