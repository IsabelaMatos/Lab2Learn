
function login() {
    const senhaCorreta = 'senha@123'
    var senha = window.document.getElementById("txtSenha").value

    if (senhaCorreta == senha) {
        alert("Senha correta")  
        
    } else {
        alert("Senha incorreta")
    }
    
    
}