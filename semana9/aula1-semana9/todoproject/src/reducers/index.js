import tarefas from './tarefas'
import {combineReducers} from 'redux'

const rootReducer = combineReducers ({
    tarefasReducer: tarefas //Deixei assim só pra não me perder
})

export default rootReducer;