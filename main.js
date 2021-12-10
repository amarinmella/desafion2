alert('Vamos a realizar ejercicios utilizando Condicionales');

//Numero > 1000
let num1 = Number(prompt('Ingrese un numero'));
if (num1 > 1000) {
    alert('El número ingresado es mayor que 1000');
}
else if (num1 == 1000){
    alert('El número ingresado es igual a 1000');
}
else {
    alert('El número ingresado es menor a 1000');
}

//Comparando String
let texto = prompt('Ingrese un texto');
if ((texto == 'Hola') || (texto == 'hola')){
    alert('El texto ingresado es Hola');
} else {
    alert('El texto ingresado no es Hola');
}

//Evaluando rango entre numeros
let num2 = Number(prompt('Ingrese un numero'));
if ((num2 > 10) && (num2 < 50)){
    alert('El numero se encuentra en el rango');
}
else {
    alert('El numero no esta en el rango');
}