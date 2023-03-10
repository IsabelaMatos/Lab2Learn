
function login() {

    const senhaCorreta = 'Senha@123'
    var senha = window.document.getElementById("txtSenha").value

    if (senhaCorreta == senha) {
       abrirPagina()  
        
    } else {
        alert("Senha incorreta")
    }
    
    
}


//-----------------------------------------------------------------------------------

function abrirPagina() {
    location.replace("sistemaCalculadora.html", "_self");
    
}


//-----------------------------------------------------------------------------------

function calcularAreaCirculo(){
    // Recebe os dados
    var raioCirculo = window.document.getElementById("txtRaioCirculo").value

    // Processa os dados
    // ----> Criar um teste Lógico para ver se o Campo está Vazio
    // if(raioCirculo == null) 




    // Devolve valor
    window.document.getElementById("resAreaCirculo").innerText = "Resposta"
}


//-----------------------------------------------------------------------------------


