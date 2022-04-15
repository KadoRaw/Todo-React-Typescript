import Todos from './components/Todos';
import styles from './App.css';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';

function App() {
  return (
    <TodosContextProvider>
      <div className={styles.main}>
        <NewTodo />
        <Todos />
      </div>
    </TodosContextProvider>
  );
}

export default App;
