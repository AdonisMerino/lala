document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const menuLinks = document.querySelectorAll('#menu a');

    // Alternar la visibilidad del menú al hacer clic en el icono
    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('open');
    });

    // Cerrar el menú al hacer clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
        });
    });
});
