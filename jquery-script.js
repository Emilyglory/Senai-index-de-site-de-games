//efeito de esconder formulário de cadastro

$(document).ready(function(){ //comando padrão para inicializar o jquery

    
    $("#botao-cadastrar").click(function(){

    
        $("#form-cadastrar").slideToggle("slow"); //slideToggle esconde ou mostra a sessão de cadastro
        $("#section-login").hide("slow");
        $("#botao-cadastrar").hide();
    });

}); 

//Ativar alert no botão cadastrar

function cadastro(){
    alert("Cadastro realizado com sucesso !");
    window.location.href = "index.html";
    
}
