export const criadorDeNovasTarefas = (novaTarefa) => {
    return {
        type: "CRIAR_TAREFA",
        payload: {
            novaTarefa: novaTarefa        } //Escrevi assim só pra não bugar xD
    }
}

