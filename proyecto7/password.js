
document.getElementById("generateBtn").addEventListener("click", generatePassword);
document.getElementById("copyBtn").addEventListener("click", copyPassword);
document.getElementById("length").addEventListener("input", updateLength);

//Función para generar la contraseña
function generatePassword() {
    const length = document.getElementById("length").value;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;

    //Generar arrays para símbolos, números y mayúsculas
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "@#$%^&*()_+[]{}!?+-";

    let charPool = lowercaseChars;
    if (includeUppercase) charPool += uppercaseChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSymbols) charPool += symbolChars;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    document.getElementById("password").value = password;
    evaluateSecurity(password);
}

//Función para copiar la contraseña
function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("¡La contraseña ha sido copiada!");
}

function updateLength() {
    document.getElementById("lengthValue").textContent = document.getElementById("length").value;
}

//Función para evaluar la seguridad de la contraseña
function evaluateSecurity(password) {
    const securityLevel = document.querySelector(".level");
    let score = 0;

    if (password.length >= 8) score++;  // Longitud mínima
    if (password.length >= 12) score++; // Longitud buena
    if (/[A-Z]/.test(password)) score++; // Mayúsculas
    if (/[0-9]/.test(password)) score++; // Números
    if (/[@#$%^&*()_+[\]{}!?]/.test(password)) score++; // Símbolos

    if (score <= 2) {
        securityLevel.textContent = "Baja";
        securityLevel.className = "level low";
    } else if (score <= 4) {
        securityLevel.textContent = "Media";
        securityLevel.className = "level medium";
    } else {
        securityLevel.textContent = "Alta";
        securityLevel.className = "level high";
    }
}