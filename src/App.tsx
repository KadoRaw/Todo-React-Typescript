import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.main}>
      <NewTodo />
      <Todos />
    </div>
  );
}

export default App;
