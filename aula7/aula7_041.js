function calc(n1,n2,oper){
    if(oper=="+")
        return n1+n2;
    else if(oper=="-")
        return n1-n2;
    else if(oper=="*")
        return n1*n2;    
    else    
        return "Operador não encontrado";     
}
    var num1=parseFloat(prompt("Digite um número"));
    var num2=parseFloat(prompt("Digite outro número"));
    var operador=prompt("Digite o operador");

    document.write("num1: "+num1+", num2: "+num2+" calc: "+calc(num1,num2,operador));

    /*
Desafio: Alterar a função calc() implementando um terceiro parâmetro como operador
de forma a realizar as operações "+" "-" "*" "/" "%"

Exemplo: calc(num1,num2,"+") "+" irá realizar a soma dos dois números
calc(num1,num2,"+")
    */