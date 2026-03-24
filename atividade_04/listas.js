// 1. ARRAYS

//1.1 Array Simples
const frutas = ["maçã", "banana", "laranja"];
//1.2 FIFO (Fila)
const fila = ["Anna", "beto", "Caio", "Daiane"];
fila.push("Ellen");
const primeiro = fila.shift(); // Primeiro item
console.log(primeiro);
//1.3 FILO (Pilha)
const pilha = 
["Caraval",
     "Quarta asa",
      "hipótese do amor"];
pilha.push("Estilhaça-me");
const livro = pilha.pop();
console.log(livro);
// 1.4 Buscar se existe
const temLaranja = frutas.includes("Laranja");
const teManga = frutas.includes("Manga");
console.log(temLaranja);
console.log(teManga);
// 2. Sets (Conjuntos)
// 2.1 Adicionando duplicados
const matricula = new Set([1001, 1002, 1005, 1009, 1002]);
console.log([...matricula]);
// 2.2 Adicionar item
const cores = new Set(["Verde", "Azul"]);
cores.add("Vermelho");
cores.add("Branco");
cores.add("Preto");
console.log([...cores]);
// 2.3 Buscar se Existe
const temVerde = cores.has("Verde");
const temAmarelo = cores.has("Amarelo");
console.log(temVerde);
console.log(temAmarelo);
// 2.4 Converter array em set
const convidados = ["Beuno", "Henrique", "Juliana", "Carol", "Juliana", "Breno", "Henrique"];
const convidados_unicos = new Set(convidados);
console.log([...convidados_unicos]);

// 3. Map (Mapas)
// 3.1 Cadastro de Preços
const produtos = new Map();
produtos.set("Mouse", 50.00);
produtos.set("Teclado", 120.00);
// 3.2 Buscando um Valor
valorMouse = produtos.get("Mouse");
console.log(valorMouse);
