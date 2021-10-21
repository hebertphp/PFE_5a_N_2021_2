var destino;
destino=prompt("Digite seu destino: ");
destino=destino.toLowerCase();//letras minúsculas
switch (destino) {
case "são paulo":
  document.write("Seja bem vindo a cidade que nunca para!");
break;
case "new york":
  document.write("Seja bem vindo a Big Apple!");
break;
default:
  document.write("Não encontramos seu destino!");
}