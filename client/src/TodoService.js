import axios from "axios";

const url = "http://localhost:5000/api/todos/";

class TodoService {
  static getTodos() {
    return new Promise((resolve, reject) => {
      axios.get(url).then(res => (resolve(res.data))).catch(err => reject(err));
    })
  }
  static insertTodo(title, completed) {
    return axios.post(url, { title, completed });
  }
  static deleteTodo(id) {
    return axios.delete(`${url}${id}`);
  }
  static updateTodo(updatedTodo) {
    return axios.patch(`${url}${updatedTodo._id}`, { completed: updatedTodo.completed })
  }
}

export default TodoService;