// Obtener la fecha actual en la zona horaria local
const now = new Date().getTime();

// Convertir la hora de Argentina a UTC (UTC-3)
const argentinaTime = new Date('2024-05-05T17:00:00-03:00');
const endDate = argentinaTime.getTime();

// Actualizar la cuenta regresiva cada segundo
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;

    // Calcular días, horas, minutos y segundos restantes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el resultado en el elemento con id="countdown"
    document.getElementById('countdown').innerHTML = `
        <div>${days}d</div>
        <div>${hours}h</div>
        <div>${minutes}m</div>
        <div>${seconds}s</div>
    `;

    // Si la cuenta regresiva ha terminado, mostrar un mensaje
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "¡Ha terminado la cuenta regresiva!";
    }
}, 1000);