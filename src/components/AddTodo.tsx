import React, { useState } from "react";
import { addTodo as apiAddTodo } from "../api/endpoints"; // Assuming this is the API function

interface AddTodoProps {
  addTodo: (todo: {
    id: number;
    todo_name: string;
    completed: boolean;
  }) => void;
}

export default function AddTodo({ addTodo }: AddTodoProps) {
  const [todoName, setTodoName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (todoName.trim()) {
      try {
        const newTodo = await apiAddTodo(todoName);
        addTodo(newTodo);
        setTodoName("");
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center w-full">
        <input
          className="flex-1 border-2 p-2"
          type="text"
          name="todo_name"
          id="todo_name"
          required
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button className="bg-gray-600 p-2 m-0 outline-none" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
}
