//Declalar un array que contenga frutas

let frutas = ["manzana", "kiwi", "melón", "manzana", "sandía", "kiwi", "manzana", "tuna", "jícama", "uva", "tuna","jícama", "kiwi", "melón"];

//Crear un objeto

let contadorDeFrutas = {};

//Recorrer el array para contar las frutas

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    if (contadorDeFrutas[fruta]) {
        contadorDeFrutas[fruta]++;
    } else {
        contadorDeFrutas[fruta] = 1;
    }
}
console.log("Conteo de frutas:", contadorDeFrutas);





