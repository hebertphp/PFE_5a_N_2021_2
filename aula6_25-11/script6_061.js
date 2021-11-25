var msg="";
var animal=["gato","lobo","cavalo","lagarto","ornitorrinco"];
//            0      1       2        3           4

for(var i=0;i<=4;i++){
    msg+=animal[i]+"<br>";
}

// var j;
// j="oi";
// j+="blz";//j = j + "blz"

document.querySelector(".d1").innerHTML=msg;

document.getElementById("saida").innerHTML=animal[4]+"<br>"+animal[0];