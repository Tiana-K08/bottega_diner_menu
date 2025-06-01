// Determining the meal type based on user-input time
let timeInput;
const timePattern = /^(?:[0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
const clientExit = '¡Vuelve pronto!\nSiempre eres bienvenido en Bottega Diner.';
let mealType = '';

outerLoop: while (mealType == '' || mealType == 'invalid') {
    timeInput = prompt('¡Bienvenido a Bottega Diner!\nNuestra cocina trabaja para usted todos los días de 08:30 a 23:00.\n\nPor favor, introduzca la hora actual en formato HH:MM');
    if (timeInput === null) {
        alert(clientExit);
        break outerLoop;
    } else {
        timeInput = timeInput.trim();
        if (timePattern.test(timeInput)) {
            const [hours, minutes] = timeInput.split(':').map(Number);
            if (hours < 8 || (hours == 8 && minutes < 30) || hours >= 23) {
                mealType = 'closed';
            } else if (hours < 12) {
                mealType = 'breakfast';
            } else if (hours < 18) {
                mealType = 'lunch';
            } else {
                mealType = 'dinner';
            }
        } else {
            mealType = 'invalid';
            alert('Ha introducido un formato de hora incorrecto. Por favor, introduzca la hora en el formato HH:MM.');
        }
    }
}

// Selecting a random comment from a predefined list
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

// Normalizing user input text for consistent processing
function normalizeText(text) {
    return text
        .toLowerCase() // Convert to lowercase
        .normalize('NFD') // Normalize to decompose characters
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
        .replace(/[^a-z0-9ñ\s]/g, '') // Remove non-alphanumeric characters except spaces
        .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
        .trim(); // Remove leading and trailing spaces
}

// Menu cards with prices
const firstCourses = [
    {name: 'Ensalada', price: 5.50},
    {name: 'Sopa', price: 4.50},
    {name: 'Gazpacho', price: 5.00}
];

const secondCourses = [
    {name: 'Paella', price: 12.00},
    {name: 'Pollo', price: 10.00},
    {name: 'Bacalao', price: 11.00}
];

const desserts = [
    {name: 'Flan', price: 3.00},
    {name: 'Tarta', price: 3.50},
    {name: 'Helado', price: 2.50}
];

const extras = [
    {name: 'Café', price: 1.60},
    {name: 'Refresco', price: 1.50},
    {name: 'Vino', price: 3.00},
    {name: 'Cerveza', price: 2.00},
    {name: 'Nada', price: 0.00}
];

// Selecting item names for menu generation
function itemsSelection(courses, title) {
    let choiceInput;
    while (!choiceInput) {
        let message = `${title}\n\n`;
        for (let i = 0; i < courses.length; i++) {
            message += `${courses[i].name} - €${courses[i].price.toFixed(2)}\n`;
        }
        choiceInput = prompt(message);
        if (choiceInput === null) {
            let answer = confirm('¿Está seguro de que desea salir? Pulse "Aceptar" para salir o "Cancelar" para continuar eligiendo.');
            if (answer) {
                alert(clientExit);
                return null;
            } else {
                choiceInput = null;
            }
        } else {
            const normalizedInput = normalizeText(choiceInput);
            const matchedCourse = courses.find(course => normalizeText(course.name) === normalizedInput);
            if (matchedCourse) {
                let confirmMessage = `Has elegido: ${matchedCourse.name} - €${matchedCourse.price.toFixed(2)}`;
                if (matchedCourse.name !== 'Nada') {
                    confirmMessage += `\n${randomComment()}`;
                }
                confirmMessage += `\n\n¿Confirmar esta elección?`;
                const confirmChoice = confirm(confirmMessage);
                if (confirmChoice) {
                    return matchedCourse;
                } else {
                    choiceInput = null;
                }
            } else {
                alert('Opción no válida. Por favor, escriba el nombre exactamente como aparece en el menú.');
                choiceInput = null;
            }
        }
    }
}

// Generating a lunch menu with user-selected items
function lunchMenuSelection(firstCourses, secondCourses, desserts, extras) {
        const first = itemsSelection(firstCourses, "Elija el primer plato:");
        if (first === null) return;

        const second = itemsSelection(secondCourses, "Elija el segundo plato:");
        if (second === null) return;

        const dessert = itemsSelection(desserts, "Elija el postre:");
        if (dessert === null) return;

        const extra = itemsSelection(extras, '¿Desea añadir algo adicional?');
        if (extra === null) return;

        const total = first.price + second.price + dessert.price + extra.price;

        const factura = `FACTURA FINAL:\nPrimer plato: ${first.name} - €${first.price.toFixed(2)}\nSegundo plato: ${second.name} - €${second.price.toFixed(2)}\nPostre: ${dessert.name} - €${dessert.price.toFixed(2)}\nExtra: ${extra.name} - €${extra.price.toFixed(2)}\n\nTOTAL A PAGAR: €${total.toFixed(2)}\n¡Gracias por su pedido!`;
        alert(factura);
    }

if (mealType === 'lunch') {
    lunchMenuSelection(firstCourses, secondCourses, desserts, extras);
}

