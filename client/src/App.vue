<template>
  <div id="app">
    <Header />
    <AddTodo @add-todo="addTodo" />
    <Todos
      v-bind:todos="todos"
      @del-todo="deleteTodo"
      @update-todo="updateTodo"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import TodoService from "./TodoService";

export default {
  name: "App",
  components: {
    Header,
    Todos,
    AddTodo,
  },
  data() {
    return {
      todos: [],
      error: "",
    };
  },
  methods: {
    async deleteTodo(id) {
      await TodoService.deleteTodo(id);
      this.todos = await TodoService.getTodos();
    },
    async addTodo(newTodo) {
      const { title, completed } = newTodo;
      await TodoService.insertTodo(title, completed);
      this.todos = await TodoService.getTodos();
    },
    async updateTodo(updatedTodo) {
      await TodoService.updateTodo(updatedTodo);
      this.todos = await TodoService.getTodos();
    },
  },
  async created() {
    try {
      this.todos = await TodoService.getTodos();
    } catch (error) {
      this.error = error.message;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
