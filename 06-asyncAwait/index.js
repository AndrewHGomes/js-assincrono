async function somaAsync(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Apenas números, por favor...");
  }

  return a + b;
}

async function subtracaoAsync(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Apenas números, por favor...");
  }

  return a - b;
}

const resultadoSoma = somaAsync(6, 42);

const resultadoSubtracao = subtracaoAsync(105, 21);

Promise.all([resultadoSoma, resultadoSubtracao])
  .then((resultado) => console.log(`Resultados: ${resultado}`))
  .catch((erro) => console.log(`ERRO: ${erro}`));

// ------------------------------------------------------------

const numeros = [10, 20, 30, 40];

async function asyncQuadrado(x) {
  return x * x;
}

Promise.all(numeros.map((numero) => asyncQuadrado(numero)))
  .then((resultado) => console.log(`Resultado: ${resultado}`))
  .catch((erro) => console.error(`Erro: ${erro}`));

// ------------------------------------------------------------

async function verificarNome(nome) {
  if (nome) {
    return `O nome é ${nome}`;
  }

  return Promise.reject("Por favor, insira seu nome...");
}

async function executar() {
  try {
    const resultado = await verificarNome();
    console.log(resultado);
  } catch (error) {
    console.log(error.message);
  }
}

executar();
