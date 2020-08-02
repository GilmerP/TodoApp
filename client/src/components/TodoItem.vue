<template>
  <div class="todo-item" v-bind:class="{ 'is-completed': todo.completed }">
    <p style="width: 100%; text-align: left;">
      <input type="checkbox" @change="markComplete" :checked="todo.completed" />
      {{ todo.title }}
      <button class="del" @click="$emit('del-todo', todo._id)">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
      this.$emit("update-todo", this.todo);
    },
  },
};
</script>

<style scoped>
.todo-item {
  margin: 5px 0px;
  background: #f4f4f4;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px black;
}

.is-completed {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>
