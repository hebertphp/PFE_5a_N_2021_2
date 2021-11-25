var msg="";
var semana=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];

for(var i=0;i<7;i++){
    msg+=semana[i]+" é o "+(i+1)+"o dia da semana!<br>";
}
document.querySelector(".d1").innerHTML=msg; 
/*


*/