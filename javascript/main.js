// Función para desplegar texto al hacer click en las tarjetas de Lore
function toggleText(element) {
    element.classList.toggle('active');
}

// Desplazamiento suave para la navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efecto de feedback visual al clickear botones
const buttons = document.querySelectorAll('.btn-pixel');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log("Iniciando aventura en Lúmina...");
    });
});