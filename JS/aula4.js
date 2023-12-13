let funcionario = [
    {
      nome: 'Euclides',
      idade: 21,
      cargo: 'Analista de sistemas',
      tecnoglogia: ['Node', 'Angular', 'React'],
    },
    {
      nome: 'Linton',
      idade: 30,
      cargo: 'Analista de sistemas',
      tecnoglogia: 'Tudo',
    },
  ];

funcionario.push({
    nome: 'Richard',
    idade: 27,
    cargo: 'aluno',
    tecnologia: "JS",
});

// funcionario.map((resposta) => {
//     if(resposta.nome === 'Linton'){
//         console.log(resposta);
//     }
// })

// for (let i=0; i<funcionario.length; i++){
//     if(funcionario[i].nome == 'Caio'){
//         console.log(funcionario[i]);
//     }
// }

// const valor = funcionario.filter((resposta) => {
//     return resposta.nome === "Linton";
// })
// console.log(visualViewport);

funcionario.map((resposta) => {
    if(resposta.nome === 'Euclides'){
        resposta.tecnoglogia.push('HTML', 'JS')
        console.log(resposta);
        resposta.tecnoglogia.pop('HTML')
        console.log(resposta);
    }
})