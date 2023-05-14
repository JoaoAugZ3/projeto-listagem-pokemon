/*
// --> é um comentario simples de uma linha.
/* --> é um comentario de multiplas linhas

  O que precisamos fazer? -quando clicarmos no botão de troca de tema
  temos que alterar a cor do tema da página para as cores do tema claro ou 
  do tema escuro.

  -Objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe
  modo-escuro no body pra que os estilos do modo escuro sejam aplicadas e mudar a imagem pra lua
       - passo 1: pega no JS o elemento HTML correspondente ao botão de troca de tema
       - passo 2: dar um jeito de pegar no JS o elemento HTML correspondente ao body
       - passo 3: dar um jeito de identificar  o clique do usuário no botão
       de troca de tema
       - passo 4: adicionar a classe modo-escuro no body
       - passo 5: trocar a imagem do botão de alterar tema pra lua
       
  -Objetivo 2 - Quando clicar no botão de troca de tema, caso o body
       
       - passo 6: Remover a classe  

*/

/*console.log() - permite mostrar informações no console do navegador 'F12'
     
    console.log(document.getElementById("botao-alterar-tema"))
    
document- acessa o documento HTML
getElementByID - busca no arquivo htnl pelo id, sendo o ID o parametro.-const(constante) informa que estamos criando uma variável constante(que não muda)
-O nome da variável é um exemplo padrão ultilizado em JS, java e etc.
-Nome de variável tem que ser claro, sem espaço e em Camel Case.*/
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//Estou procuramento no doc HTML a tag body, o querrySelector busca qualquer seletor(tag, classe e etc.).
const body = document.querySelector("body");

// o "." representa classe, igual no css
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

//adiciona um evento pra um elemento do html
// "() => {[código]}" é uma Arrow function, uma função sem parâmetros, que será disparada assim que o botão for clicado
botaoAlterarTema.addEventListener("click", () => {
    //verificar se o body tem a classe modo-escuro e fazer o inverso, mudar o tema escuro pro claro, removendo a classe do modo-escuro do body.
    //Verificando se o body tem a classe modo-escuro, se tiver, retorna True.

    //O toggle vai alternar entre dois estados, fazendo assim não ser necessário as linhas  remove e add do 'body.classList...'
    //body.classList.toggle("modo-escuro")

    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    if (modoEscuroAtivo) {
        //remove a classe modo-escuro do body
        body.classList.remove("modo-escuro")
        //muda a foto da lua pro sol
        imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/sun.png")
    } else{
        //classList puxa a lista de classe do body
        //estamo adicionando uma classe no body
        body.classList.add("modo-escuro");

        //alterando a imagem do sol pra lua
        //setAtribute recebe os dois valores, o que você quer mudar pelo novo valor
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
});

