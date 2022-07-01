const Modal =  document.querySelector(".modal_cont")
const cerrarModal = document.querySelector(".modal_close")

 function  modal (){
    Modal.classList.add("modal_cont--ver")

    cerrarModal.addEventListener('click', function(){

     Modal.classList.remove("modal_cont--ver")

    })


}


