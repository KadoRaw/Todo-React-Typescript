import { useEffect } from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import htmlService from '../service/htmlService';

const Todos: React.FC<{}> = () => {
  const getTodos = async () => {
    const response = await htmlService.fetch(
      'https://todo-typescript-bcc8c-default-rtdb.europe-west1.firebasedatabase.app/todo.json'
    );

    return response.data;
  };

  let todos: Todo[] = [];

  useEffect(() => {
    (async () => {
      const response: any = await getTodos();
      const data: any[] = [];

      for await (const iterator of response) {
        for (const key of response) {
          data.push(key);
        }
      }
      console.log(data);

      data.map(async (todo) => {
        return new Todo(todo.text, todo.id);
      });
      todos = [...data];
    })();
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
};

export default Todos;
