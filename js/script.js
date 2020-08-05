$(document).ready (function(){

    function changeIn(){
        $(this).css("background","rgb(25, 159, 163").css("color", "black");
    }
    
    function changeOut(){
        $(this).css("background","rgb(197, 202, 202)").css("color", "black");
    }
    
    $('.btn-enviar').hover(changeIn, changeOut);


    $('.btn-enviar').click(function(){
        alert("Completa todos los campos del formulario");
    })

})


