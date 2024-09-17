document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('video');

    // Aquí puedes agregar más controles o eventos personalizados
    video.addEventListener('play', function () {
        console.log('El video está en reproducción');
    });

    video.addEventListener('pause', function () {
        console.log('El video está en pausa');
    });
});
