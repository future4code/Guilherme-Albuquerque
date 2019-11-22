function aoClicarNoBotao(){
    const valorDoInput = document.getElementById('input').value
    const container = document.getElementById('main-container')
    container.innerHTML += "<h2>" + valorDoInput + "</h2>"

}

function aoTeclar(e){
    if (e.key === 'Enter'){
        aoClicarNoBotao()
    }
}