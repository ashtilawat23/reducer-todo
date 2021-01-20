import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const tasks = [{ 
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
  }];

  return (
    <div className="App">
      <h1 className='heading'>Ash's Todo App</h1>
      <TodoList tasks={tasks}/>
      <TodoForm />
    </div>
  );
}

export default App;
