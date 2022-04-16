import { RootStateOrAny, useSelector } from 'react-redux';

import Todo from '../../models/todo';
import TodoItem from '../TodoItem';

import styles from './index.module.css';

const Todos: React.FC<{}> = () => {
  const todoItems = useSelector<RootStateOrAny, Todo[]>(
    (state) => state.todo.items
  );
  const todos = [...todoItems];

  return (
    <ul className={styles.todos}>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default Todos;
