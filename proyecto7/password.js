document.addEventListener("DOMContentLoaded", () => {
    const contraseña = document.getElementById("contraseña");
    const copiar = document.getElementById("copiar");
    const longitud = document.getElementById("longitud");
    const valorLongitud = document.getElementById("valor-longitud");
    const mayuscula = document.getElementById("mayuscula");
    const minuscula = document.getElementById("minuscula");
    const numero = document.getElementById("numero");
    const simbolo = document.getElementById("simbolo");
    const generar = document.getElementById("generar");
    const fortaleza = document.getElementById("fortaleza");
  
    // Función para generar la contraseña
    function generarPassword(opciones) {
      const caracteres = {
        mayuscula: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        minuscula: "abcdefghijklmnopqrstuvwxyz",
        numero: "0123456789",
        simbolo: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
      };
  
      let caracteresDisponibles = "";
      let password = "";
      if (opciones.mayuscula) caracteresDisponibles += caracteres.mayuscula;
      if (opciones.minuscula) caracteresDisponibles += caracteres.minuscula;
      if (opciones.numero) caracteresDisponibles += caracteres.numero;
      if (opciones.simbolo) caracteresDisponibles += caracteres.simbolo;
  
      for (let i = 0; i < opciones.longitud; i++) {
        const random = Math.floor(Math.random() * caracteresDisponibles.length);
        password += caracteresDisponibles[random];
      }
      return password;
    }
  
    // Función para calcular la fortaleza
    function calcularFortaleza(password) {
      let fuerza = 0;
      if (/[A-Z]/.test(password)) fuerza++;
      if (/[a-z]/.test(password)) fuerza++;
      if (/\d/.test(password)) fuerza++;
      if (/[^A-Za-z0-9]/.test(password)) fuerza++;
      return ["DÉBIL", "MEDIA", "FUERTE", "MUY FUERTE"][fuerza - 1] || "DÉBIL";
    }
  
    // Eventos
    longitud.addEventListener("input", () => {
      valorLongitud.textContent = longitud.value;
    });
  
    generar.addEventListener("click", () => {
      const opciones = {
        longitud: parseInt(longitud.value),
        mayuscula: mayuscula.checked,
        minuscula: minuscula.checked,
        numero: numero.checked,
        simbolo: simbolo.checked,
      };
  
      const password = generarPassword(opciones);
      contraseña.value = password;
      fortaleza.textContent = calcularFortaleza(password);
    });
  
    copiar.addEventListener("click", () => {
      contraseña.select();
      document.execCommand("copy");
      alert("Contraseña copiada al portapapeles");
    });
  });
  