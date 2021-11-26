var num=[10,20,30,40,50,2020,2021,2022];
//pos    0  1  2   3  4  5   6      7
//contar 1  2  3   4  5  6   7      8


//var do tipo array 50 valores
//                  0  
var tam;
tam=num.length;//quantidade de valores do array
document.querySelector(".d1").innerHTML= ("var num possui "+tam+" valores<hr>") + ("Todos os valores da var num: "+num+"<hr>");
document.querySelector("#saida").innerHTML=("Valor da primeira posição de num: "+num[0]+"<hr>") + ("Valor da última posição de num: "+num[tam-1]+"<hr>");
/*
Alterar o código para que o conteúdo da linha 4 e da linha 5
sejam direcionados para a class d1 e o conteúdo da linha 6 e da
linha 7 sejam direcioados para a id saida.
*/