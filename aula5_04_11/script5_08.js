var i;
 
while (i <= 5) {
 document.write(i + "<br>");
 i++;
}
document.write ("<hr><h2>Desafio1</h2>");
i=7;
while (i < 10) {//
    document.write(i + "<br>");
    i++;
}
document.write ("<hr><h2>Desafio2</h2>");
i=3;
while (i >= 0) {// 
    document.write(i + "<br>");
    i--;
}
document.write ("<hr><h2>Desafio2</h2>");
i=0;
while (i <= 8) {// 
   
    document.write(i + " ");
    // i++;i++;
    //i=i+2;
    i+=2;
}
/*
(i++) 
        i       i>=0     saída
        3       V(T)    0
        1       V(T)    1
        2       V(T)    2
        3       V(T)    3
        4       V(T)    4
        5       V(T)    5
        6       Falso

1) Qual o valor inicial? 7
2) Qual a condição? i < 10
3) Qual o contador? i++
4) Qual o valor que torna a condição falsa? 10
5) Quantas vezes foi executado o looping? 3
6) Qual o último valor impresso? 9

Desafio 1:

7
8
9

Desafio 2:

3
2
1
0

Desafio 3:

0 2 4 6 8

*/