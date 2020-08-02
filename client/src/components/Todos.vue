<template>
  <div class="todolist">
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem
        v-bind:todo="todo"
        @del-todo="$emit('del-todo', todo._id)"
        @update-todo="$emit('update-todo', todo)"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "Todos",
  props: ["todos"],
  components: {
    TodoItem,
  },
};
</script>

<style>
.todolist {
  max-width: 600px;
  margin: auto;
}
</style>
