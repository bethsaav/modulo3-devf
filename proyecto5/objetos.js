//Crear un objeto libro con propiedades

    const libro = {
        titulo: "Alas de Sangre",
        autor: "Rebeca Yarros",
        año: 2023,
        estado: "Disponible",
        capitulos: [
            "Capitulo 1",
            "Capitulo 2",
            "Capitulo 3",
            "Capitulo 4",
            "Capitulo 5"
    ],

//Crear un Método para describir el libro

    describirLibro: function() {
        return `El libro ${this.titulo}, fue escrito por ${this.autor} en el año ${this.año}, y el estado es: ${this.estado}`;
    },

//Crear una función para enlistar libros

    listaCapitulos: function() {
        console.log(`Lista de capitulos del libro ${this.titulo}`);
        this.capitulos.forEach((capitulo, index) => {
        console.log(`${index + 1}. ${capitulo}`);
        });
    },

//Crear una función para agregar capítulos

    agregarCapitulos: function (capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Se ha agregado el capitulo ${capitulo}`);
        this.listaCapitulos();
  },

//Crear una función para eliminar capítulos

    eliminarCapitulos: function (capitulo) {
        const index = this.capitulos.indexOf(capitulo);
        if (index !== 1) {
            this.capitulos.splice(index, 1);
            console.log(`Se ha eliminado el capitulo ${capitulo}`);
            this.listaCapitulos();
        } else {
        console.log(`El capitulo ${capitulo} no existe`);
        }
        },
    };

console.log(libros.describirLibro());
libros.agregarCapitulos(`Capítulo 6`);
libros.eliminarCapitulos(`Capiítulo 4`);