// Mensaje de consola para verificar que funciona
console.log("Web personal cargada correctamente");

// Ejemplo: Cambiar el color del menú al hacer scroll
window.onscroll = function() {
    const nav = document.querySelector('nav');
    if (window.pageYOffset > 50) {
        nav.style.backgroundColor = '#1a252f';
    } else {
        nav.style.backgroundColor = '#2c3e50';
    }
};