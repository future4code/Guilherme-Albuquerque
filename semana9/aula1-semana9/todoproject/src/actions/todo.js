export const criarTarefa = (novaTarefa) => ({
    type: "CRIAR_TAREFA",
    payload: {
        novaTarefa: novaTarefa,
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
        tarefaId,
    }
})
