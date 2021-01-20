import React from 'react';

class TodoForm extends React.Component {

    render() {
        return (
        <div className='todo-form'>
            <form>
                <label>
                Add a new task:<input />
                </label>
                <button>Submit</button>
            </form>
        </div>
        );
    }
}

export default TodoForm;