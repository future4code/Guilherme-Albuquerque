export const criarTarefa = (novaTarefa) => ({
    type: "CRIAR_TAREFA",
    payload: {
        novaTarefa: novaTarefa, //Deixei assim pra não confundir na hora de voltar
    }
})

export const marcarTarefa = (tarefaId) => ({
    type: "MARCAR_TAREFA",
    payload: {
        tarefaId: tarefaId
    }
})

export const deletarTarefa = (tarefaId) => ({
    type: "DELETAR_TAREFA",
    payload: {
        tarefaId: tarefaId,
    }
})
