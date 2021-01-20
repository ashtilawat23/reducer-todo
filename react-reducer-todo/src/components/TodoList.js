import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {
    
    return (
        <div className='todo-list'>
        <ul>
          {
            props.tasks.map (getTask => {
              return (<Todo getTask={getTask}/>);
            })
          }
        </ul>
        <button>Clear Completed</button>
        </div>
    )
}

export default TodoList; 