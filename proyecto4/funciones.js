//Declarar un array

let librosLeidos = [];

//Definir función para agregar libros
function agregarLibro(titulo){
    librosLeidos.push(titulo);
    console.log('El libro ' + titulo + ' ha sido agregado ');
}

//Definir función para mostrar libros leidos

function mostrarLibrosLeidos(){
    if(librosLeidos.length === 0){
        console.log('No has leido ningun libro');
    }else{
        console.log('Libros leidos:');
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        })
    }
}

agregarLibro('Powerless');
agregarLibro('Los juegos del hambre');
agregarLibro('Vidas Cruzadas');
agregarLibro('Gardenia');
mostrarlibrosLeidos();