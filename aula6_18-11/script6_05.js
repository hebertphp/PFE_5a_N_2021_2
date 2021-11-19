var msg="";
var nota=[10,8.5,7.75,9.5];
var num=[];
num[0]=120;
num[1]=200;
num[2]=2020;

var nome=new Array("Jose","Paula","Carla");

msg+=nota+"<hr>";
msg+=num+"<hr>";
msg+=nome+"<hr>";

document.querySelector("#saida").innerHTML=msg;
document.getElementById("saida").innerHTML=msg;

document.querySelector(".d1").innerHTML=msg;