import {setTasks} from './index'
describe ('Testa actions', () => {
  
  test ('Testando setTasks', () => {
    const task = {
      day: 'Segunda-Feira',
      text: "Testando"
    }
    const action = setTasks(task)

    expect (action.type).toBe("SET_TASKS")
    expect (action.payload.tasks.text).toBe("Testando")
    expect (action.payload.tasks.day).toBe("Segunda-Feira")
  })
})