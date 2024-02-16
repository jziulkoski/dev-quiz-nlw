const perguntas = [
    {
        pergunta: "Quem é o protagonista da série 'Naruto'?",
        respostas: [
            "Sasuke Uchiha",
            "Naruto Uzumaki",
            "Kakashi Hatake",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome do sensei de Naruto na equipe 7?",
        respostas: [
            "Jiraiya",
            "Orochimaru",
            "Kakashi Hatake",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome da vila onde Naruto nasceu?",
        respostas: [
            "Konohagakure",
            "Sunagakure",
            "Kirigakure",
        ],
        correta: 0
    },
    {
        pergunta: "Quem é considerado o rival de Naruto desde o início da série?",
        respostas: [
            "Sasuke Uchiha",
            "Gaara",
            "Neji Hyuga",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome da raposa de nove caudas que está selada dentro de Naruto?",
        respostas: [
            "Shukaku",
            "Matatabi",
            "Kurama",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a técnica de assinatura de Naruto?",
        respostas: [
            "Chidori",
            "Rasengan",
            "Sharingan",
        ],
        correta: 1
    },
    {
        pergunta: "Quem é o pai de Naruto?",
        respostas: [
            "Minato Namikaze",
            "Kakashi Hatake",
            "Hashirama Senju",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a especialidade de Sasuke Uchiha?",
        respostas: [
            "Taijutsu",
            "Ninjutsu",
            "Genjutsu",
        ],
        correta: 1
    },
    {
        pergunta: "Quem é o líder da Akatsuki?",
        respostas: [
            "Deidara",
            "Pain",
            "Itachi Uchiha",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a ambição de Itachi Uchiha?",
        respostas: [
            "Se tornar Hokage",
            "Proteger sua vila",
            "Alcançar a paz através do genocídio",
        ],
        correta: 2
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