import axios from "axios";

const BASE_URL = `http://159.223.4.145`;

const GET_URL = `${BASE_URL}/api/v1/todos`;

export const getTodos = async () => {
  return axios.get(GET_URL);
};

export const addTodo = async (todo_name: string) => {
  const res = await axios.post(`${BASE_URL}/api/v1/todos`, { todo_name });
  return res.data;
};

export const updateTodo = async (id: number, completed: boolean) => {
  try {
  } catch (e) {
    console.error("error occured while updating todo complete status ", e);
  }
  const res = await axios.patch(
    `${BASE_URL}/api/v1/todos/${id}/updated_completed`,
    { completed: !completed }
  );
  console.log("update res is : ", res.data);
  return res.data;
};

export const deleteTodo = async (id: number) => {
  try {
    await axios.delete(`${BASE_URL}/api/v1/todos/${id}`);
  } catch (e) {
    console.error(
      "An error has been occured while trying to delete todo for id : ",
      id,
      " and error is ",
      e
    );
  }
};
