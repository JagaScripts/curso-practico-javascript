//console.log("Figuras geométricas");

// Códig del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const preimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado miden: ${preimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado miden: ${areaCuadrado} cm^2`);
console.groupEnd();

// Códig del triángulo
console.group("Triangulo");
const baseTriangulo = 4;
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
console.log(`Los lados del triangulo miden: 
${baseTriangulo} cm, 
${ladoTriangulo1} cm, 
${ladoTriangulo2} cm `);
console.groupEnd();