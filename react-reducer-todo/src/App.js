import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { useReducer } from 'react';
import reducer, { initialState } from './reducers/index'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState) 
  const handleClick = () => {

  }

  return (
    <div className="App">
      <h1 className='heading'>Ash's Todo App</h1>
      <TodoList tasks={state.tasks}/>
      <TodoForm />
      <button onClick={handleClick}>Test Button</button>
    </div>
  );
}

export default App;
