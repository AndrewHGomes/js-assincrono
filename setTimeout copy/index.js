console.log("1ª linha do programa...");

const timer = setTimeout(
  () => console.log("Função assíncrona no meio do programa..."),
  3000
);

console.log("Última linha do programa.");

clearTimeout(timer);
