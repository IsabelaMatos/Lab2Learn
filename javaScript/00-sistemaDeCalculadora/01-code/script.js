
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
    const pi = 3.14
    var Resposta = pi*raioCirculo**2

    if (raioCirculo == null || raioCirculo == 0) {
        alert("Digite um número válido")
    } else {
        
    }


    // Devolve valor
    window.document.getElementById("resAreaCirculo").innerText = Resposta
    //---ATENÇÃO: Precisa colocar na resposta a descrição "cm²"
}


//-----------------------------------------------------------------------------------

function calcularVolumeEsfera(){
    //Recebe os dados
    var raioCirculo = window.document.getElementById("txtRaioEsfera").value

    //Processa os dados
    


    //Devolve Valor
    window.document.getElementById("resVolumeEsfera").innerText = "Resposta"
    //---ATENÇÃO: Precisa colocar na resposta a descrição "cm³"
}
