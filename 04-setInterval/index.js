console.log("Iniciando a aplicação...");

const timer = 3000;
let seconds = 0;

const interval = setInterval(() => {
  console.log(`Executando após ${(seconds += 3)} segundos.`);
}, timer);

setTimeout(() => clearTimeout(interval), timer * 3);

console.log("Fim da aplicação!");
