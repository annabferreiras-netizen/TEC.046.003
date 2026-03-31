// Atividade 1: O Filtro de Hashtags
const tags = ["#vida", "#javascript", "#aula", "#js", "#café"];
const tags_js = tags.filter(n => n.includes("#js"));
tags_js.forEach(n => console.log(n));

// Atividade 2: Formatador de Nomes de Usuário
const nomes = ["aLeX", "mArIa", "jOãO", "bIa"];
const maiusculas = nomes.map(n => n.toUpperCase());
nomes.forEach(n => console.log(n.toUpperCase()));
nomes.map(n => n.toLowerCase())
      .forEach(n => console.log(n));

//Atividade 3: Sistema de Busca de Convidados
const convidados = ["Ana", "Al", "Alberto", "Bia", "Amanda", "Ab"];
const busca = convidados.filter(nome => nome.startsWith("A")) && convidados.filter(nome => nome.length > 2);
busca.forEach(nome => console.log(nome));              

// Atividade 4: O Corretor de Preços (Matemática)

