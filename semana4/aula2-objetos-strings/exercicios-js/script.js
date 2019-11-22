// Exercício 3

criaRetangulo(22,32)





function criaRetangulo (n1, n2){
    let triangulo = {
        largura: n1,
        altura: n2,
        perímetro: (2 * (n1 + n2)),
        área: (n1 * n2)
    }
    console.log(triangulo)
}

// Exercício 4

const infoPessoa = {
    nome: "Guilherme",
    idade: 28,
    endereco: "Av: Jorge Zarur 431",
    email: "guilhermeabq.f@gmail.com"
}

console.log(infoPessoa)

function anonimizarPessoa(){
    const anonimous = {
        ...infoPessoa,
        nome: "Anonimous"
    }
    return anonimous
}

let anonimo = anonimizarPessoa()
console.log(anonimo)

//Exercício 5

let filmePreferido = {
    titulo: "A origem",
    ano: 2010,
    diretor: " Christopher Nolan",
    atores: ["Leonardo DiCaprio", "Ellen Page", "Cillian Murphy"]
}

console.log("Venha assistir ao filme " + filmePreferido.titulo + " do ano " + filmePreferido.ano
+ ", dirigido por " + filmePreferido.diretor + " e estrelado por " + filmePreferido.atores[0] + ", "+ filmePreferido.atores[1]
+ ", " + filmePreferido.atores[2])