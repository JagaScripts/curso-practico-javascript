//console.log("Figuras geométricas");

// Códig del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = (ladoCuadrado) => ladoCuadrado * 4;
console.log(`El perímetro del cuadrado miden: ${perimetroCuadrado(7)} cm`);

const areaCuadrado = (ladoCuadrado) => ladoCuadrado * ladoCuadrado;

console.log(`El area del cuadrado miden: ${areaCuadrado(5)} cm^2`);
console.groupEnd();

// Códig del triángulo
console.group("Triangulos");
/*const baseTriangulo = 4;
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const alturaTriangulo = 5.5;
console.log(`Los lados del triangulo miden: 
${baseTriangulo} cm, 
${ladoTriangulo1} cm, 
${ladoTriangulo2} cm `);*/
const perimetroTriangulo = (ladoTriangulo1, ladoTriangulo2, baseTriangulo) => ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo, alturaTriangulo) => (baseTriangulo * alturaTriangulo) / 2;
console.log(`Perimetro triangulo ${perimetroTriangulo(3,2,4)} AreaTriangulo ${areaTriangulo(3,2,4)}`);
console.groupEnd();

// Código del circulo
console.group("Circulos");

// Radio
//const radioCirculos = 4;

//Diámetro
const diametroCirculo = (radioCirculos) => radioCirculos * 2;

//Pi 
//const PI = 3.1415;
const PI = Math.PI;
console.log(PI);
// Circuferencia
const perimetroCirculo = (radio) => (diametroCirculo(radio)) * PI;

// Área
const areaCirculo = (radioCirculo) => (radioCirculo * radioCirculo) * PI;
console.log(`PerimetroCirculo ${perimetroCirculo(3)} AreaCirculo ${areaCirculo(3)} DiametroCirculo ${diametroCirculo(3)}`);

console.groupEnd();

// Aquí interactuamos con el HTML
function getInputCuadrado(){
    const input = document.getElementById("InputCuadrado");
    return input.value;
}

function calcularPerimetroCuadrado() {
  const perimetro = perimetroCuadrado(getInputCuadrado());
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const area = areaCuadrado(getInputCuadrado());
  alert(area);
}
