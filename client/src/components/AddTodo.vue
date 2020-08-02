<template>
  <div>
    <form @submit.prevent="addTodo">
      <input
        type="text"
        v-model="title"
        name="title"
        placeholder="Add Todo..."
      />
      <input type="submit" value="Submit" />
    </form>
    <hr style="width: 500px" />
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTodo(e) {
      console.log(123);
      e.preventDefault();
      const newTodo = {
        title: this.title,
        completed: false,
      };
      this.$emit("add-todo", newTodo);
      this.title = "";
    },
  },
};
</script>

<style>
input[type="text"] {
  box-sizing: border-box;
  width: 500px;
  padding: 5px;
  font-size: 20px;
}
input[type="submit"] {
  box-sizing: border-box;
  width: 100px;
  padding: 5px;
  font-size: 20px;
}
</style>
