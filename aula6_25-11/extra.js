/*
---------------------------------
------Array unidimensional-------
---------------------------------
*/
var x=[10,20,30,40];
function mult(n){
    return n*2;
}
function imp(valor,pos){
    document.write(valor+" ");
}
var k = x.map(mult);
var y = x.map(n=>n*2);
var z = x.filter(n => n<=30);
x.forEach(imp);
document.write("<br>");
x.forEach((x,y)=>{
    document.write(`[${y}]=${x}, `);
})
document.write("<hr>");
document.write(`${x}<br>`);
document.write(`${k}<br>`);
document.write(`${y}<br>`);
document.write(`${z}<hr>`);
/*
---------------------------------
------Array objeto---------------
---------------------------------
*/
var alunos = [
    {nome : "Anacleto", ra: "123456789",nota:5.5},
    {nome : "Belarmina", ra: "123456798",nota:7.5},
    {nome : "Pafuncia", ra: "987654321",nota:6.5}
  ];
function nome_nota(item) {
    return item.nome+" "+item.nota;
}
function nota_azul(item){
    if(item.nota>=6){
        return item;
    }
}
var nomenota = alunos.map(nome_nota);
var nomenota1 = alunos.map(item=>item.nome+" "+item.ra+" ");
var notaok = alunos.filter(nota_azul);
var notaok1 = alunos.filter(n => (n.nota >= 7));
document.write(`${nomenota}<br>`);
document.write(`${nomenota1}<hr>`);
alunos.forEach(item=>{
    document.write(`Nome: ${item.nome}, RA:${item.ra}, Nota:${item.nota} <br> `);
})
document.write("<br>");
for(var i=0;i<notaok.length;i++){
    document.write(`${notaok[i].nome} ${notaok[i].nota}<br>`);
}
for(var i=0;i<notaok1.length;i++){
    document.write(`${notaok1[i].nome} (${notaok[i].nota})<br>`);
}
