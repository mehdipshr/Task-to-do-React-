import './App.css';
import AllTasks from './components/AllTasks';
import Header from './components/Header';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TaskForm></TaskForm> 
      <AllTasks></AllTasks>


    </div>
  );
}

export default App;
