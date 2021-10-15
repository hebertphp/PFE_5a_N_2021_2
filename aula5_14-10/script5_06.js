var a,b;
a=parseInt(prompt("Digite um número:"));
b=parseInt(prompt("Digite outro número"));
if (a == b) {
document.write("A variável a:"+a+" é igual a variável b:"+b);
}
else if (a < b){
document.write("A variável a:"+a+" é menor a variável b:"+b);
}
else{
document.write("A variável a:"+a+" é maior a variável b:"+b);
}
/*
Desafio: alterar o código para que sejam digitados dois valores e a saída deverá 
mostrar os valores e são iguais, maior ou menor.
*/