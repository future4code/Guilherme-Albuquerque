const initalState = ({
  tasks : [],
})

export function postReducer (state = initalState, action) {
  switch (action.type) {
    case "SET_TASKS":
      return({
        ...state, tasks: action.payload.tasks                  
      })
    
    default:
          return (
              state
          )
  }
}

