/* cSpell: disable */
/* Write a function called max that takes one argument, an array, and returns 
the maximum value of that array.

Rules:

- You cannot use Math.max (duh!)
- You can only use const to declare any variables
- You cannot use any loops like for or while
- You cannot use any other argument than the one passed to the function
- If the array is empty then return -Infinity, just like with Math.max.apply
(null, [])
- You cannot use any Array.prototype methods like forEach, map, filter, or 
reduce */

function max(array) {
    // Verifica si el array está vacío. Si es así, devuelve -Infinity.
    if (array.length === 0) {
      return -Infinity;
    }
    // Si el array tiene un solo elemento, devuelve ese elemento.
    if (array.length === 1) {
      return array[0];
    }
    // Divide el array en dos mitades aproximadamente.
    const firstHalfMax = max(array.slice(0, array.length / 2));
    const secondHalfMax = max(array.slice(array.length / 2, array.length));
    /* Llama recursivamente a la función max en cada mitad del array.
    Compara los resultados de las dos llamadas recursivas y devuelve el
    máximo de ambos. */
    return firstHalfMax > secondHalfMax ? firstHalfMax : secondHalfMax;
  }
  
  console.log(max([1, 2, 3, 4, 5])); // 5
  console.log(max([5])); // 5
  console.log(max([])); // -Infinity
  console.log(max([99, 2, 100, 4, 5])); // 100