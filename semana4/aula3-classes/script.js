function aoEnviar (){
    let inputTxt = document.querySelector("input#inputTxt").value
    let sectionImg = document.querySelector("section.imagens")
    sectionImg.innerHTML += '<img src="'+inputTxt+' " alt="">'
}

function aoTeclar(e){
    if(e.key === 'Enter'){
        aoEnviar()
    }
}