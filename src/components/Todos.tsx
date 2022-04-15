import { useContext } from 'react';
import Todo from '../models/todo';
import { TodosContext } from '../store/todos-context';
import TodoItem from './TodoItem';
import styles from './Todos.module.css';

const Todos: React.FC<{}> = () => {
  const Todoctx = useContext(TodosContext);
  const todos: Todo[] = [...Todoctx.items];

  return (
    <ul className={styles.todos}>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
};

export default Todos;
