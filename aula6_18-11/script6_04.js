var x=[2020,2,"Hoje"];
x[0]++;/* soma 1 */
x[1]=x[0]%2;
x[0]+=" em dia";/* operador de atribuição Juntar o valor que a posição já tem concatenando(juntando) com em dia */;

document.getElementById("saida").innerHTML=x[0]+" <br>"+ x[1]+ " <br>"+ x[2]+ " <br>";
/*
x[0]=2021
x[1]=1
x[2]=Hoje em dia
*/