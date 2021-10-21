// var x = prompt("Digite algo");
// x = parseInt(x);

var a = parseInt(prompt("Digite o Valor de A"));//3
var b = parseInt(prompt("Digite o Valor de B"));//7

if (a == b){

    document.write("A Variável A (" + a + ") é igual a variável B (" + b +").");
} else if (a < b){

    document.write("A Variável A (" + a + ") é menor que a variável B (" + b +").");

} else {
    document.write("A Variável A (" + a + ") é maior que a variável B (" + b +").");
}