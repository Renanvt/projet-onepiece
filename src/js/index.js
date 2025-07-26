// Quando eu selecionar um botão quero que troque a imagem de fundo, coloque o botão como selecionado, troque o título do personagem e o texto

const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll(".personagem");


//percorre a lista e para cada item da lista executa uma ação
botoes.forEach((botao, key) => {
    botao.addEventListener("click", () => {
        //verificar se existe um botão selecionado, se sim, devemos remover a seleção dele
        desselecionarBotao();

        //verificar se existe um personagem selecionado, se sim, devemos remover a seleção dele
        desselecionarPersonagem();

        //Adiciona a classe "selecionado" no botão que o usuário clicou
        botao.classList.add("selecionado")

        //Adiciona a classe "selecionado" no personagem da posição atual
        personagens[key].classList.add("selecionado")



    })
})


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");

    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

