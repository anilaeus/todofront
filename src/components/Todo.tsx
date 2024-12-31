import React from "react";
import { RiDeleteBack2Line } from "react-icons/ri";

interface TodoProps {
  todo_name: string;
  completed: boolean;
  id: number;
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
}
const Todo: React.FC<TodoProps> = ({
  todo_name,
  completed,
  id,
  handleToggle,
  handleDelete,
}) => {
  return (
    <div className="border-2  p-6 flex items-center max-w-3xl mx-auto  ">
      <div className="flex-1 gap-4 flex items-center">
        <input
          checked={completed}
          onChange={() => handleToggle(id)}
          type="checkbox"
          name="completed"
          id={String(id)}
        />
        <label htmlFor={String(id)}>{todo_name}</label>
      </div>
      <RiDeleteBack2Line
        onClick={() => {
          if (confirm("Are you sure?")) {
            handleDelete(id);
          }
        }}
        size={"16px"}
        className=" text-red-500 cursor-pointer hover:text-red-800"
      />
    </div>
  );
};

export default Todo;
