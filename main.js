// Declaramos un array llamado 'frutas' con 4 elementos: manzana, pera, piña, y uva.
let frutas = ["manzana", "pera", "piña", "uva"];

// Usamos el método slice() para extraer una porción del array 'frutas'.
// Aquí slice(1,4) toma los elementos desde el índice 1 hasta el índice 3 (el índice 4 es excluido).
// El resultado será un nuevo array que contiene: ["pera", "piña", "uva"].
let diferente = frutas.slice(1, 4);

// Imprimimos en la consola el nuevo array 'diferente', que es ["pera", "piña", "uva"].
console.log(diferente);
