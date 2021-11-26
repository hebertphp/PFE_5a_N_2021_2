var uf=["SP","RJ","ES","MG"];
var msg="";
var i;
for (i=0;i<uf.length;i++){
    msg+=(uf[i]+"<br>");
}
document.querySelector(".d1").innerHTML=msg;
document.querySelector(".d1").style.width="200px";
