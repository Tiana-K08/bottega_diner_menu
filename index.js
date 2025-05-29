// Determine meal type based on user-provided time input
// let timeInput;
// const timePattern = /^(?:[0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
// let clientExit = '¡Vuelve pronto!\nSiempre eres bienvenido en Bottega Diner.';
// let mealType = '';

// outerLoop: while (mealType == '' || mealType == 'invalid') {
//     timeInput = prompt('¡Bienvenido a Bottega Diner!\nNuestra cocina trabaja para usted todos los días de 08:30 a 23:00.\n\nPor favor, introduzca la hora actual en formato HH:MM');
//     if (timeInput === null) {
//         alert(clientExit);
//         break outerLoop;
//     } else {
//         timeInput = timeInput.trim();
//         if (timePattern.test(timeInput)) {
//             const [hours, minutes] = timeInput.split(':').map(Number);
//             if (hours < 8 || (hours == 8 && minutes < 30) || hours >= 23) {
//                 mealType = 'closed';
//             } else if (hours < 12) {
//                 mealType = 'breakfast';
//             } else if (hours < 18) {
//                 mealType = 'lunch';
//             } else {
//                 mealType = 'dinner';
//             }
//         } else {
//             mealType = 'invalid';
//             alert('Ha introducido un formato de hora incorrecto. Por favor, introduzca la hora en el formato HH:MM.');
//         }
//     }
// }

// Select a random comment from a predefined list
function randomComment() {
    const comments = [
        'Recomendación del chef. ¡Simplemente espectacular!',
        '¡Este plato alegra cualquier día!',
        'Uno de los favoritos de nuestros clientes.',
        '¡Excelente elección! Este plato es muy popular.',
        '¡Elección perfecta! Estás a la moda culinaria.',
        '¡Una delicia! No te arrepentirás.'
    ];
    return comments[Math.floor(Math.random() * comments.length)];
}


console.log(randomComment());