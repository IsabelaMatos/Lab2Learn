
function login() {

    const senhaCorreta = 'Senha@123'
    var senha = window.document.getElementById("txtSenha").value

    if (senhaCorreta == senha) {
       abrirPagina()  
        
    } else {
        alert("Senha incorreta")
    }
    
    
}

function abrirPagina() {
    location.replace("sistemaCalculadora.html", "_self");
    
}