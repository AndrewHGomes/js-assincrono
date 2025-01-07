// function cumprimentar(nome) {
//   return new Promise((resolve, reject) => {
//     if (nome) {
//       resolve(nome);
//     } else {
//       reject(new Error("Insira o nome..."));
//     }
//   });
// }

// cumprimentar()
//   .then((nome) => console.log(`Olá, ${nome}!`))
//   .catch((erro) => console.error("ERRO:", erro.message))
//   .finally(() => console.log("Promise finalizada!"));

//------------------------------------------------------------

// function imc(peso, altura) {
//   return new Promise((resolve, reject) => {
//     if (typeof peso !== "number" || typeof altura !== "number") {
//       reject("Digite apenas números...");
//     } else {
//       resolve(peso / (altura * altura));
//     }
//   });
// }

// function mostrarImc(peso, altura) {
//   imc(peso, altura)
//     .then((resultado) => {
//       console.log(`Seu IMC é: ${resultado.toFixed(2)}`);
//       let situcao = "";
//       if (resultado < 18.5) situcao = "MAGREZA";
//       else if (resultado < 25) situcao = "NORMAL";
//       else if (resultado < 30) situcao = "SOBREPESO";
//       else if (resultado < 40) situcao = "OBESIDADE I";
//       else situcao = "OBESIDADE II";

//       console.log(`Sua situação é: ${situcao}`);
//     })
//     .catch((erro) => console.error("ERRO:", erro));

//   console.log("Calculando...");
// }

// mostrarImc(67, 1.81);
// mostrarImc(64, 1.64);
// mostrarImc("ola", false);
// mostrarImc(true, {});

//------------------------------------------------------------

// function checarIdade(idade) {
//   return new Promise((resolve, reject) => {
//     if (idade) {
//       resolve(idade > 18);
//     } else {
//       reject(new Error("Você precisa inserir a idade..."));
//     }
//   });
// }

// function obterIdade(aniversario) {
//   return new Promise((resolve, reject) => {
//     if (aniversario) {
//       const anoNascimento = new Date(aniversario).getFullYear();
//       const anoAtual = new Date().getFullYear();
//       resolve(anoAtual - anoNascimento);
//     } else {
//       reject(new Error("Você precisa inserir o aniversário..."));
//     }
//   });
// }

// obterIdade("")
//   .then((idade) => checarIdade(idade))
//   .then((maior18) => {
//     if (maior18) console.log("Maior de idade!");
//     else console.log("Menor de idade!");
//   })
//   .catch((erro) => console.error("Erro:", erro.message));

//------------------------------------------------------------
