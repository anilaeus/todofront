import React, { useEffect, useState } from "react";
import Todo from "./Todo";

import { deleteTodo, getTodos, updateTodo } from "../api/endpoints";
import AddTodo from "./AddTodo";

interface TodoType {
  id: number;
  todo_name: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await getTodos();
      setTodos(res.data);
    };
    fetchTodos();
  }, []);

  const handleToggle = async (id: number) => {
    const todoToUpdate = todos.find((todo) => todo.id == id);
    const completed = todoToUpdate?.completed as boolean;
    await updateTodo(id, completed);
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const addTodo = (todo: TodoType) => {
    setTodos((prev) => [todo, ...todos]);
  };
  console.log("Todos :", todos);
  return (
    <div className="space-y-4">
      <div className="max-w-3xl mx-auto">
        <AddTodo addTodo={addTodo} />
      </div>
      {todos.slice(0, 15).map((item: TodoType) => (
        <Todo
          key={item.id}
          todo_name={item.todo_name}
          completed={item.completed}
          id={item.id}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
