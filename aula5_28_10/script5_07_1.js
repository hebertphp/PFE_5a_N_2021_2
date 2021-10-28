var uf;
uf=prompt("Digite um UF");
switch(uf){
    case "SP":
        document.write(uf + " - São Paulo");
    break;
    case "RJ":
        document.write(uf + " - Rio de Janeiro");
    break;
    default:
        document.write(uf + " - Não sei qual é esse UF!");
}
document.write("<hr>");
/*
Desafio:
Transformar o código switch case em if..else if...else
*/
// var uf;
uf = prompt("Digite um UF: ");
uf = uf.toUpperCase();
if(uf == "SP"){
    document.write(uf + ": São Paulo");
}
else if(uf == "RJ"){
    document.write(uf + ": Rio de Janeiro");
}
else{
    document.write("UF não cadastrada.");
}