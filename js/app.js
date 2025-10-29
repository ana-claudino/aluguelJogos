//Gostaria de implementar uma prototipagem de apenas devolver se você foi quem alugou, mas sem a ideia do prompt como meio de confirmação, como na devolução...

let vezesAlugado = 0;

function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        let confirmacao = prompt('Confirma a devolução do jogo? Digite Sim ou Não'); 
        
        if (confirmacao == 'Sim' || confirmacao == 'sim') {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        } else{
            return;
        }

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        vezesAlugado++;
    }

    console.log(vezesAlugado);
}
