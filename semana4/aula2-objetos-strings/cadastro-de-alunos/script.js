function cadastro(){
    const nomeCadastro = document.getElementById("nome").value 
    const idadeCadastro = document.getElementById("idade").value 
    const emailCadastro = document.getElementById("email").value 
    const listaCadastro = document.getElementById("listaCadastro")

    listaCadastro.innerHTML += '<div class="alunos"><p>Nome: ' + nomeCadastro + '</p>' +
    ' <p> Idade: ' + idadeCadastro + '</p>' +
    ' <p> Email: ' + emailCadastro + '</p> </div>';

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("email").value = "";
    
    
    // listaCadastro.innerHTML += '<p>Nome: ' + nomeCadastro+ '</p>'
}