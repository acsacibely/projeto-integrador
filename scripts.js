
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