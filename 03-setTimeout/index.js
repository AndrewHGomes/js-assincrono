console.log("Iniciando a aplicação...");

const timer = 2000;
let seconds = 0;

const timeOut = setTimeout(() => {
  console.log(`Executando após ${(seconds += 2)} segundos.`);
}, timer);

// clearTimeout(timeOut);

console.log("Fim da aplicação!");
