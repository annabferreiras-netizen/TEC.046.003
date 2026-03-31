// .map(): Criar uma lista com od dados alterados
const metros = [1, 5, 10];
const centimetros = metros.map(m => m * 100);
centimetros.forEach(c => console.log(`${c} cm`));

// .filter(): Criar uma lista com oc itens especificados
const notas = [8, 4, 9, 5];
const notas_baixas = notas.filter(n => n < 6);
notas_baixas.forEach(n => console.log(n));

// .find(): Retornar apenas o primeiro item que passa na condição
const alunos = ["João", "Maria", "José"];
const busca = alunos.find(nome => nome === "Maria");
console.log(busca); 
// .every(): Retorna se todos passam no predicado
const entregas = [true, true, false];
const todosEntregaram = entregas.every(e => e === true);
console.log(todosEntregaram);

// .toUpperCase .toLowerCase:
//         coloca as letras em maiúsculo/minúsculo
const nomes = ["ana", "bia"];
const maiusculas = nomes.map(n => n.toUpperCase());
nomes.forEach(n => console.log(n.toUpperCase()));
nomes.map(n => n.toLowerCase())
      .forEach(n => console.log(n));
      
 // .startsWith() .endsWith():
      // retornar quem começa/termina com...
      const arquivos = ["foto.jpg", "texto.txt", "ferias.jpg"];
      const apenasFotos = arquivos.filter(arq => arq.endsWith(".jpg"));
      apenasFotos.forEach(arq => console.log(arq));

 // .includes(): Verifica se um texto contém outro
      const produtos = ["Monitor Dell", "Mouse Razer", "teclado Dell"];
      produtos
                .filter(p => p.includes("Dell"))
                .forEach(i => console.log(i));

 // .replace(): Troca uma parte do texto por outra
let telefone = "(61) 12345-6789";
const escondido = telefone.replace("(61)", "(**)");
console.log(escondido);