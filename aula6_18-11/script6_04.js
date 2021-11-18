var x=[2020,2,"Hoje"];
var msg="";
x[0]++;/* soma 1 */
x[1]=x[0]%2;
x[2]+=" em dia";/* operador de atribuição Juntar o valor que a posição já tem concatenando(juntando) com em dia */;

msg+=x[0]+"<hr>";
msg+=x[1]+"<hr>";/*   */
msg+=x[2]+"<br>";/* para comentar uma linha [Ctrl][;] */
msg+=x;

document.getElementById("saida").innerHTML=msg;

// document.getElementById("saida").innerHTML=x[0]+" <br>"+ x[1]+ " <br>"+ x[2]+ " <br>";
/*
x[0]=2021
x[1]=1
x[2]=Hoje em dia

Um minuto...
*/