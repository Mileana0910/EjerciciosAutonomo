let colores = ["negro", "morado", "rosa", "azul"];

console.log("Primer color:", colores[0]); 
console.log("Último color:", colores[colores.length - 1]); 

colores.push("rojo"); 
console.log("Resultado despues de agregar un color:", colores);

colores.shift(); 
console.log("Resultado despues de eliminar el primer color:", colores);

console.log("Número de colores:", colores.length); 
