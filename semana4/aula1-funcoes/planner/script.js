function criarTarefa(){
    let option = document.getElementById("seletor").value
    let dia = document.getElementById(option)
    let inputTxt = document.getElementById("inputtxt").value
    dia.innerHTML += ("<ul> <li>" + inputTxt +  "</li> </ul>")
    document.getElementById('inputtxt').value = ""
}

