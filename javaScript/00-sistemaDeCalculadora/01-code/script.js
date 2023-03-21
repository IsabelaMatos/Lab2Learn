
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
        alert("Digite ussm número válido")
    } else {
        window.document.getElementById("resAreaCirculo").innerText = Resposta
    }



}


//-----------------------------------------------------------------------------------

function calcularVolumeEsfera(){
    // receber dados
    var raioEsfera = window.document.getElementById("txtRaioEsfera").value

    // processar dados
     let resVolumeEsfera = (4 * pi * raioEsfera**3) / 3
     if (raioEsfera == null || raioEsfera == 0) {
        alert(" Digite um número válido")
     } else {
        // mostrar dados ( fazer conta )
        window.document.getElementById("resVolumeEsfera").innerText = resVolumeEsfera
     }


    
    
    
}
