function telefone(texto) {
  const corrigindo = texto.replace(/[\sa-zA-Z]/g, "");
  this.codigoPais = corrigindo.match(/(?<=\+)\d{1,3}/)[0];
  this.ddd = corrigindo.match(/(?<=\()\d+(?=\))/)[0];
  this.numero = corrigindo.match(/(?<=\)).+/)[0];
}

console.log(new telefone("+55 (19) 9 8941-3147"));
