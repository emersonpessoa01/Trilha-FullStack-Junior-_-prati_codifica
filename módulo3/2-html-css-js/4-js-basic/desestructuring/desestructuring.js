// let numeros = [10, 20, 41]

// const [primeiro, , terceiro] = numeros

// console.log(primeiro)
// // console.log(segundo)
// console.log(terceiro)

// let pessoa = {
//     nome: 'Geromel',
//     idade: 39,
//     profissao: 'Cão de guarda'
// }

// const {nome, idade, profissao} = pessoa

// console.log(nome)
// console.log(idade)
// console.log(profissao)

// const {nome: nomePessoa, idade: anos, cidade = 'Rio de Janeiro'} = pessoa
// console.log(nomePessoa)
// console.log(anos)
// console.log(pessoa)

// Com base nesse array: numeros = [10, 20, 30, 40, 50, 60]

// Use a desestruturação de arrays para atribuir os valores dos três primeiros elementos para as variáveis a, b e c.

// const numeros = [10, 20, 30, 40, 50, 60];

// const [a, b, c] = numeros;

// console.log(a);
// console.log(b);
// console.log(c);

// const desenvolvedor = {
//     nome: 'Carlos',
//     idade: 32,
//     contato: {
//       email: 'carlos.dev@example.com',
//       endereco: {
//         cidade: 'Porto Alegre',
//         estado: 'RS',
//         pais: 'Brasil'
//       }
//     },
//     projetos: ['Website', 'App Mobile', 'API']
//   };

// 1. Desestruture nome e idade diretamente do objeto
// 2. Extraia o email da propriedade contato
// 3. Extraia cidade, estado e país do objeto aninhado endereco
// 4. Extraia o primeiro e o segundo projeto da lista de projetos

/*
const desenvolvedor = {
  nome: "Carlos",
  idade: 32,
  contato: {
    email: "carlos.dev@example.com",
    endereco: {
      cidade: "Porto Alegre",
      estado: "RS",
      pais: "Brasil",
    },
  },
  projetos: ["Website", "App Mobile", "API"],
};

// 1. Desestruture nome e idade diretamente do objeto
const { nome, idade } = desenvolvedor;

// 2. Extraia o email da propriedade contato
const { email } = desenvolvedor.contato;

// 3. Extraia cidade, estado e país do objeto aninhado endereco
const { cidade, estado, pais } = desenvolvedor.contato.endereco;

// 4. Extraia o primeiro e o segundo projeto da lista de projetos
const [primeiroProjeto, segundoProjeto] = desenvolvedor.projetos;

console.log(nome);
console.log(idade);
console.log(email);
console.log(cidade);
console.log(estado);
console.log(pais);
console.log(primeiroProjeto);
console.log(segundoProjeto);
*/




