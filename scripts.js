/*
const Description = {
    open(){
        //abrir modal
        //add class active ao modal
        document
            .querySelector('.definition')
            .classList.add('active')

    },
    close(){
        //fechar o modal
        //remover a class active do modal
        document
            .querySelector('.definition')
            .classList.remove('active')

    }
}
*/
document.getElementById('word').addEventListener("click", function (){
  //o evento de clique está sendo escutado
  //variáveis para atribuir as imagens
  let imagem = document.getElementById('seta').src;
  let setaCima = "https://cdn-icons-png.flaticon.com/512/32/32323.png";
  let setaBaixo = "https://cdn-icons-png.flaticon.com/512/32/32195.png";
  //condição de clique
  if(imagem === setaBaixo){
    document.getElementById('seta').src = setaCima;
  } else {
    document.getElementById('seta').src = setaBaixo;
};
});


/*
function toggleDescription(){
    const description = document.getElementByClass(".definition");
    Element.classList.toggle("definition.active")
}
*/
/*
function Description() {
    var x = document.getElementsByClassName("definition");
    if (x.style.display === "none") {
      x.style.display = "block";
  
    } else {
      x.style.display = "none";

    }
  }
*/
/*
let toggle = document.querySelector('i')
let div = document.getElementsByClassName('definition')

toggle.addEventListener('click', () =>{
  if(div.style.display === 'none'){
    div.style.display = 'block';
  }else {
    div.style.display = 'none'
  }
})
*/