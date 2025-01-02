// const promessa = Promise.resolve(11 + 11);

// console.log("Algum código no meio...");

// promessa
//   .then((valor) => {
//     console.log(`A soma é: ${valor}`);
//     return valor;
//   })
//   .then((valor) => valor + 5)
//   .then((valor) => console.log(`Adiconando 5: ${valor}`));

// console.log("Algum código no fim.");

// console.log("");

// //---------------------------------------------------------

// Promise.resolve(45 * "teste")
//   .then((n) => {
//     if (Number.isNaN(n)) {
//       throw new Error("Valores inválidos");
//     }
//   })
//   .catch((err) => console.error(err));

// console.log("");

//---------------------------------------------------------

// const resposta = true;

// console.log("Pedir Uber.");

// const outraPromessa = new Promise((resolve, reject) => {
//   if (resposta) {
//     return resolve("Carro chegou!");
//   }
//   return reject("Corrida negada!");
// });

// console.log("Aguardando...");

// outraPromessa
//   .then((resultado) => console.log("Resultado:", resultado))
//   .catch((err) => console.error("Erro:", err))
//   .finally(() => console.log("Conclusão."));

// //---------------------------------------------------------

const url = "https://api.github.com/users/AndrewHGomes";

fetch(url)
  .then((resposta) => resposta.json())
  .then((dados) => fetch(dados.repos_url))
  .then((res) => res.json())
  .then((d) => console.log(d))
  .catch((erro) => console.log("ERRO:", erro))
  .finally(() => console.log("Finalizado!"));
