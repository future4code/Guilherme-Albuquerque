const minhaPromessa = new Promise ((resolve,reject) => {
  setTimeout(() => {
    console.log("Fiz minha operação que levou 2 segundos")
    resolve("Acabou")
  }, 2000)
})

minhaPromessa.then((result) => console.log(result)
).catch()
