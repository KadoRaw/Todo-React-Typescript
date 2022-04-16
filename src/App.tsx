import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';

import styles from './App.module.css';

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
