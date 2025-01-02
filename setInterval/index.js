console.log("1ª linha do programa...");

const intervalo = setInterval(
  () => console.log("Função assíncrona no meio do programa..."),
  3000
);

console.log("Última linha do programa.");

setTimeout(() => clearInterval(intervalo), 10000);
