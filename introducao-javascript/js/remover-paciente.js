var pacientes = document.querySelectorAll(".paciente");

// codigo remove o que ja tem na tabela e o que foi adicionado pelo formulario

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);

    /* codigo do evento de remover simplificado    
    event.target.parentNode.remove();

    
    codigo do evento de remover extendido
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode
    paiDoAlvo.remove();
    */
});




// codigo remove o que ja tem na tabela
// pacientes.forEach(function(paciente){
//    paciente.addEventListener("dblclick", function(){
//       this.remove(); 
//    });
// });