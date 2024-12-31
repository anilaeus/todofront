import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <h2 className="text-2xl text-center mt-10 font-bold">
        Welcome to our app
      </h2>
      <div className="mt-24 mx-auto max-w-6xl ">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
