import tarefasReducer from './tarefas'
import {combineReducers} from 'redux'

const rootReducer = combineReducers ({
    tarefasReducer: tarefasReducer //Deixei assim só pra não me perder
})

export default rootReducer;