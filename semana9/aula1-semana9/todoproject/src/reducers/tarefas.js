// Estado inicial

const initialState = {
    todasTarefas: [{
    }],
    
}

const tarefas = (state = initialState, action) => {
    switch(action.type){
        case "CRIAR_TAREFA":
                const novaTarefa = action.payload.novaTarefa
                const todasTarefasAtt = [...state.todasTarefas, novaTarefa]
        
            return {...state, todasTarefas: todasTarefasAtt}
        case "MARCAR_TAREFA": {
            const tarefasAtualizadas = state.todasTarefas.map ((cadaTarefa) => {
                console.log(action.payload)
                if (cadaTarefa.id === action.payload.tarefaId){
                    return {
                        ...cadaTarefa,
                         completed: !cadaTarefa.completed
                         
                    } 
                }
                return cadaTarefa;               
            });

            return {...state, todasTarefas: tarefasAtualizadas}
        }

        case "DELETAR_TAREFA": {
            const tarefasAtualizadas = state.todasTarefas.filter((cadaTarefa) => {
                return cadaTarefa.id !== action.payload.tarefaId;
            });
        
        return {...state, todasTarefas: tarefasAtualizadas};
        }

        default:
            return state;
    }
}

export default tarefas;