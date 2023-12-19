import TodoListItem from "./ToDoListItem";
import { useSelector } from "react-redux";

const selectTodos = (state) => state.todos;

export default function TodoList() {
  const todos = useSelector(selectTodos);
  return (
    <div>
      {todos.map((todo) => {
        return <TodoListItem todo={todo} ket={todo.id} />;
      })}
    </div>
  );
}

