// Estado inicial

const initialState = {
    todasTarefas: []    ,
    completadas: false
}

const tarefas = (state = initialState, action) => {
    switch(action.type){
        case "CRIAR_TAREFAS":
                const novaTarefa = action.payload.novaTarefa
                const todasTarefasAtt = [...state.todasTarefas, novaTarefa]
        
            return {...state, todasTarefas: todasTarefasAtt}
        
        default:
            return state;
    }
}

export default tarefas;