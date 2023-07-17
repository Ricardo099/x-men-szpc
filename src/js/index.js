// console.log(document);

// console.log(document.getElementById("ciclope"));

console.log(document.querySelectorAll('.personagem'));
const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {
        // ajuste pra quando abrir no celular
        if (window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        RemoverSelecaoPersonagem();

        // console.log("personagem: ", personagem);
        personagem.classList.add('selecionado');

        AlterarImagemPersonagemSelecionado(personagem);

        AlterarNomePersonagem(personagem);

        AlterarDescricaoPersonagem(personagem);

    });
})

function AlterarDescricaoPersonagem(personagem) {
    const descPersonagem = document.getElementById('descricao-personagem');
    descPersonagem.innerText = personagem.getAttribute('data-description');
}

function AlterarNomePersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function AlterarImagemPersonagemSelecionado(personagem) {
    const imgPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imgPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function RemoverSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    // console.log("personagemSelecionado: ", personagemSelecionado);
    personagemSelecionado.classList.remove('selecionado');
}
