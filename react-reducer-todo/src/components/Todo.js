import React from 'react';

const Todo = (props) => {
    const {getTask} = props;
    return (
        <li>{getTask.title}</li>
    )
}

export default Todo;