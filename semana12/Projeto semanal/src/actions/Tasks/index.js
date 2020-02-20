import Axios from 'axios'
const urlAluno = 'https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-guilherme'

export const createNewTask = (taskText, taskDay) => async (dispatch) => {
  
  try {
    await Axios.post (
      urlAluno,
      {
        "text": taskText,
        "day": taskDay,
      }
    )
    dispatch(getTasks())
  }

  catch(error){
    alert('Ocorreu um erro')
    console.log(error)

  }
}

export const getTasks = () => async (dispatch) => {
  try {
    const response = await Axios.get (
      urlAluno
    )
    console.log(response.data)
    dispatch(setTasks(response.data))

  }
  
  catch(error){
    console.log(error)
  }
}

export const setTasks = (tasks) => ({
  type: "SET_TASKS",
  payload: {
      tasks
  }
})