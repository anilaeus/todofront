import axios from "axios";
import { FormEvent } from "react";

const BASE_URL = `http://127.0.0.1:3000`;

const GET_URL = `${BASE_URL}/api/v1/todos`;

export const getTodos = async () => {
  return axios.get(GET_URL);
};

export const addTodo = async (todo_name: string) => {
  const res = await axios.post(`${BASE_URL}/api/v1/todos`, { todo_name });
  return res.data;
};
