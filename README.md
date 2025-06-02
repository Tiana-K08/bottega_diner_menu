# Bottega Diner — Menú interactivo en JavaScript

**Bottega Diner** es una aplicación interactiva de menú de restaurante, desarrollada en JavaScript puro. Simula la experiencia de un cliente en un restaurante con una camarera virtual que comenta tus elecciones, muestra los precios y calcula el total según la hora del día.

---

## Descripción del proyecto

El proyecto tiene como objetivo crear un menú dinámico que:

- Determine el tipo de comida (desayuno, comida o cena) en función de la hora introducida por el usuario.
- Presente un menú completo con platos y precios.
- Permita elegir opciones y obtener comentarios aleatorios o personalizados.
- Calcule el precio total del pedido.
- Aplique precios distintos según la franja horaria (por ejemplo, precios más altos en la cena).
- Facilite la interacción con validación y flexibilidad en la entrada del usuario.

---

## Tareas realizadas

1. **Detección automática del horario**: se determina el tipo de comida según la hora introducida (desayuno / comida / cena / cerrado).
2. **Menús por horario**:
   - Desayuno con elección de comida y bebida.
   - Comida y cena con primer plato, segundo plato, postre y un extra opcional.
   - La comida y la cena utilizan los mismos platos, pero para la cena los precios se incrementan un **20%**.
3. **Cálculo del precio total del pedido**: se suman automáticamente los precios de todos los platos seleccionados.
4. **Interactividad**:
   - El menú se muestra al usuario mediante `prompt`.
   - La “camarera” comenta cada selección con frases personalizadas o aleatorias.
   - El usuario puede cancelar su elección o salir del sistema en cualquier momento.
5. **Entrada flexible de hora**:
   - Se aceptan formatos como `08:00`, `8:00`, `12:30`, etc.
   - Validación del horario permitido (de 08:30 a 23:00).
6. **Gestión de errores y validaciones**:
   - Mensajes de advertencia para entradas no válidas.
   - Confirmación de cada elección antes de continuar.
   - Posibilidad de abandonar el proceso en cualquier paso.
7. **Soporte para entrada insensible a mayúsculas, espacios y caracteres especiales**:
   - El sistema normaliza el texto introducido eliminando tildes, signos y diferencias entre mayúsculas y minúsculas.

---

## ¿Qué puede hacer el usuario?

1. Ingresar la hora actual para acceder al menú correspondiente.
2. Ver el menú completo (comida o bebida, dependiendo del horario).
3. Seleccionar platos personalizados de cada categoría.
4. Recibir comentarios simulados por parte de una camarera.
5. Confirmar o cambiar cada elección.
6. Ver una factura detallada con el total final.
7. Salir en cualquier momento del proceso.

---

## Tipos de comida por hora

| Hora introducida | Tipo de comida |
|------------------|----------------|
| 08:30–11:59      | Desayuno       |
| 12:00–17:59      | Comida         |
| 18:00–22:59      | Cena           |
| Fuera de horario | Restaurante cerrado |

> **Nota**: Se acepta tanto `08:00` como `8:00` para comodidad del usuario.

---

## Estructura del menú

### Desayuno
- **Comida**: Tortilla, Croissant, Bocadillo
- **Bebidas**: Café, Zumo, Té, Colacao

### Comida / Cena
- **Primer plato**: Ensalada, Sopa, Gazpacho
- **Segundo plato**: Paella, Pollo, Bacalao
- **Postre**: Flan, Tarta, Helado
- **Extra**: Café, Refresco, Vino, Cerveza

> *En la cena, los precios aumentan un 20% respecto a la comida.*

