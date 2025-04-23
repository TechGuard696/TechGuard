function actualizarFechaHora() {
        const ahora = new Date();
        const fecha = ahora.toLocaleDateString('es-MX');
        const hora = ahora.toTimeString().split(' ')[0].replace(/:/g, ':'); // HH:MM:SS
        const elementoFechaHora = document.getElementById('fecha-hora');
        elementoFechaHora.textContent = `${fecha}-${hora}`;
    }

    // Llama a la función al cargar la página
    actualizarFechaHora();