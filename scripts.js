/*

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
*/

//TOGGLE
$(".abrir_imagem").click(function(){
  $(this).toggleClass("fechar"); 
});


//SIDEBAR
(function mainScript() {
  "use strict";
  const offcanvasToggle = document.querySelector(
    '[data-bs-toggle="offcanvas"]',
  );
  const offcanvasCollapse = document.querySelector(".offcanvas-collapse");
  offcanvasToggle.addEventListener("click", function () {
    offcanvasCollapse.classList.toggle("open");
  });
})();

(function buttonClose () {
  const offCanvas = document.getElementById('offCanvas');
  const btnClose = document.getElementById('btnClose');
  btnClose.addEventListener('click', function() {
    offCanvas.classList.remove("open");
  })
})();