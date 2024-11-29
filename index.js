// Función para mostrar un saludo dinámico
function mostrarSaludo() {
    const saludoElemento = document.createElement('p');
    const hora = new Date().getHours();
    let saludo = '';

    if (hora < 12) {
        saludo = '¡Buenos días!';
    } else if (hora < 18) {
        saludo = '¡Buenas tardes!';
    } else {
        saludo = '¡Buenas noches!';
    }

    saludoElemento.textContent = saludo;
    saludoElemento.style.color = 'white';
    saludoElemento.style.textAlign = 'center';
    saludoElemento.style.marginTop = '20px';
    document.body.prepend(saludoElemento);
}

// Llamar a la función cuando cargue la página
window.onload = mostrarSaludo;
