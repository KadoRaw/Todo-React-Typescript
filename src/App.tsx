import Todos from './components/Todos';
import styles from './App.css';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  return (
    <div className={styles.main}>
      <NewTodo />
      <Todos />
    </div>
  );
}

export default App;
