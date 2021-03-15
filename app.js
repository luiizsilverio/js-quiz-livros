/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
*/

const corretas = ['A','B','A','B','A','B']
let qtdPerguntas = corretas.length

const botao = document.querySelector('button')
const form = document.querySelector('form.quiz-form')

const enviaQuiz = ev => {
    ev.preventDefault()

    let acertos = 0
    let respostas = []

    corretas.forEach((item, index) => {
        const userAnswer = form[`inputQuestion${index + 1}`].value
        respostas.push(userAnswer)
    })

/*    
    const respostas = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
        form.inputQuestion6.value,
    ]
*/

    respostas.forEach( (item, indice) => {
        if (item === corretas[indice]) {
            acertos += (100 / qtdPerguntas)     
        }
    })

    //scrollTo(0,0)
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

    const resultado = document.getElementById('resultado')
    const total = resultado.querySelector('h3 > span')
    const dica = resultado.querySelector('#dica')
    
    dica.textContent = ''
    dica.classList.remove('d-none')            
    resultado.classList.remove('d-none')
        
    function daConselho(acertos) {        
        if (acertos >= 100) {
            dica.textContent = 'Parabéns, você está preparado para o mundo pós-apocalíptico'
        } else if (acertos >= 50) {
            dica.textContent = 'Você mandou bem, é um sobrevivente do caos'
        } else if (acertos >= 25) {
            dica.textContent = 'Você não foi muito bem, se for abduzido, provavelmente será dissecado' 
        } else {
            dica.textContent = 'Péssimo, você será escravo sexual de alguma aberração genética' 
        }        
    }

    let contador = 0
        
    const crono = setInterval(() => {
        total.textContent = `${ contador }%`
        if (++contador >= acertos) {
            clearInterval(crono)
            total.textContent = `${acertos.toFixed(2)}%` 
            daConselho(acertos)
        }
    }, 10);
    
}

botao.addEventListener('click', enviaQuiz)
