import Axios from 'axios'

export const createNewTask = (taskText, taskDay) => async (dispatch) => {
  const urlAluno = 'https://us-central1-missao-newton.cloudfunctions.net/generic/:planner-bouman-guilherme'
  try {
    const response = await Axios.post (
      urlAluno,
      {
        "text": taskText,
        "day": taskDay,
      }
    )
    alert('Sucesso')
  }

  catch(error){
    alert('Ocorreu um erro')
    console.log(error)
  }
}