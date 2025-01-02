const numero = 5;
const texto = "Olá";
const alguem = { nome: "Andrew" };
const lista = [1, 2, 3, "a", "b", "c"];
const fazer = () => "Uma função";

function imprimirDados(dado, tipo) {
  console.log(`DADO: ${dado} | ${tipo}`);
}

imprimirDados(numero, typeof numero);
imprimirDados(texto, typeof texto);
imprimirDados(alguem, typeof alguem);
imprimirDados(lista, typeof lista);
imprimirDados(fazer, typeof fazer);

console.log("");

//-------------------------------------------
