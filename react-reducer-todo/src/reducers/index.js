export const initialState = {
    tasks: [{ 
        title: 'Task 1', 
        id: 0,
        completed: false,
      },{ 
        title: 'Task 2', 
        id: 1,
        completed: false,
      },{ 
        title: 'Task 3', 
        id: 2,
        completed: false,
      }
    ]
}



const reducer = (state, action) => {
    switch(action.type) {
        case('ADD_TASK'):
            const newTask = {
                id: state.tasks.length,
                completed: false,
                title: action.payload,
            };

            return ({...state, tasks:[...state.tasks, newTask]});
        default:
    }
}

export default reducer;