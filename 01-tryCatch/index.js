function soma(a, b) {
  const numero1 = Number(a);
  const numero2 = Number(b);

  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("Argumentos precisam ser números...");
  }

  return `${numero1} + ${numero2} = ${numero1 + numero2}`;
}

try {
  console.log(soma(9, 5));
  console.log(soma(true, 5));
  // console.log(soma(undefined, 5));
  console.log(soma(9, "6"));
  console.log(soma(9, null));
  // console.log(soma(9, "zero"));
} catch (erro) {
  console.error(`Ocorreu um erro: ${erro.message}`);
} finally {
  console.log("Finally!");
}
