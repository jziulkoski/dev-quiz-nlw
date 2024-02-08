const perguntas = [
    {
        pergunta: "O que significa a sigla HTML em JavaScript?",
        respostas: [
            "Hypertext Markup Language",
            "High-Level Text Manipulation Language",
            "Hyper Transfer Markup Language",
        ],
        correta: 0
    },
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "variable",
            "var",
            "declare",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
        respostas: [
            "Adicionar elementos ao documento",
            "Registrar um ouvinte de eventos em um elemento",
            "Remover um evento do documento",
        ],
        correta: 1
    },
    {
        pergunta: "Como você acessa o valor de um elemento em um array em JavaScript?",
        respostas: [
            "array.valor",
            "array[valor]",
            "array.value",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
        respostas: [
            "Nenhuma diferença",
            "Comparação de valor apenas",
            "Comparação de valor e tipo de dado",
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma função de callback em JavaScript?",
        respostas: [
            "Uma função que chama outra função",
            "Uma função passada como argumento para outra função",
            "Uma função que retorna um valor",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
        respostas: [
            "Elevar um elemento na página",
            "Mover uma função para o topo do escopo antes da execução",
            "Adicionar um elemento ao final de um array",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para converter uma string em um número em JavaScript?",
        respostas: [
            "parseInteger()",
            "toNumber()",
            "parseInt()",
        ],
        correta: 2
    },
    {
        pergunta: "Como você escreve um comentário de linha única em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "' Este é um comentário",
        ],
        correta: 0
    },
    {
        pergunta: "O que é o operador ternário em JavaScript?",
        respostas: [
            "Um operador que trabalha com três operandos",
            "Um operador utilizado para concatenar strings",
            "Um operador de comparação de três valores",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()
    
    quiz.appendChild(quizItem)
}