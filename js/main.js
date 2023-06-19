//const subtrair = document.querySelector("#subtrair")
//const somar = document.querySelector("#somar")
//const braco = document.querySelector("#braco")

//const controle = document.querySelectorAll(".controle-ajuste")

//troco a classe por um atributo chamado data-controle entre"[]"
const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")
//console.log(estatistica)
const pecas = {
    "bracos":{
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem":{
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 41
    },
    "foquetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": 2
    }

}
controle.forEach((elemento)=>{
    elemento.addEventListener("click",(evento)=>{
        manipulaDados(evento.target.dataset.controle,evento.target.parentNode)//
        atualizaEstatisticas(evento.target.dataset.peca)//chama um evento .no target no local .a onde fazer .o que fazer
//manipulaDados(evento.target.textContent,evento.target.parentNode)
//console.log(evento.target.textContent, evento.target.parentNode)//vai mostrar no log o pai e os filhos apos clique
    })
})
//controle.forEach((elemento)=>{
  //  elemento.addEventListener("click",()=>{
   // console.log("funcionou")
  //})  
//})
//somar.addEventListener("click", () => {manipulaDados("somar")})
//subtrair.addEventListener("click", () => {manipulaDados("subtrair")})

function manipulaDados (operacao, controle){
    //const peca = controle.querySelector(".controle-contador")
    const peca = controle.querySelector("[data-contador]")
    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = parseInt(peca.value) + 1
    }
}
function atualizaEstatisticas(peca) {
    
    estatistica.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + 
        pecas[peca] [elemento.dataset.estatistica]
        
    })
    
}







/*const superrobo = document.querySelector("#dino")
arrow function no java atualizado ()=> mesmo que function() 
superrobo.addEventListener("click",function(evento){ 
   console.log(evento)
   /*console.log("click no Galvatron")
})
/*console.log("Bom dia a todos")
/*document.querySelector("#dino").addEventListener("click",dizOi)/*escultador fica aguardando a pagina o que o ususario faz */
/*criar uma função para fazer alguma coisa */
/*function dizOi(nome){
    console.log(nome)
    console.log("Estou aprendendo JS " +nome)
    console.log("Bem vindo ao Transformer 2023")
}
dizOi("Edson")*/