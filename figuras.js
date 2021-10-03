//console.log("Figuras geométricas");

// Códig del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const preimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado miden: ${preimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado miden: ${areaCuadrado} cm^2`);
console.groupEnd();

// Códig del triángulo
console.group("Triangulos");
const baseTriangulo = 4;
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const alturaTriangulo = 5.5;
console.log(`Los lados del triangulo miden: 
${baseTriangulo} cm, 
${ladoTriangulo1} cm, 
${ladoTriangulo2} cm `);
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.groupEnd();

// Código del circulo
console.group("Circulos");

// Radio
const radioCirculos = 4;

//Diámetro
const diametroCirculo = radioCirculos * 2;

//Pi 
//const PI = 3.1415;
const PI = Math.PI;
console.log(PI);
// Circuferencia
const perimetroCirculo = diametroCirculo * PI;

// Área
const areaCirculo = (radioCirculos * radioCirculos) * PI;

console.groupEnd();
