var num,msg;
num=prompt("Digite um número");
num=parseInt(num);
msg=num%2==0?"PAR":"ÍMPAR";
document.write(num+" - "+msg);

/*
Ternário: (condição) ? valor_cond_verd : valor_cond_falsa

calc = num % 2;// ou será 0 ou será 1
if(calc == 1){
    document.write(num+" - Ímpar");
}
else{
    document.write(num+" - Par");
}
*/