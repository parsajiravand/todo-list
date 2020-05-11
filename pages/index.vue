<template>
  <div class="app">
    <div class="container">
      <nuxt-link to="todo" class="btn button-indent">Todo</nuxt-link>
    </div>

    <div class="container">
      <div class="row header">
        <h1 class="col s6 offset-s3 center-align teal-text">To-Do List!</h1>
      </div>
      <div class="row">
        <form @submit.prevent="submitTodo" class="col s6 offset-s3">
          <div class="input-field">
            <textarea
              v-model="newTodo"
              id="icon_prefix2"
              class="materialize-textarea"
            ></textarea>
            <label for="icon_prefix2">What to do?</label>
          </div>
          <div class="text-danger" v-show="Empty"><h2>Please ENter</h2></div>
          <button class="btn waves-effect col s12">Add</button>
        </form>
      </div>
      <div class="row">
        <ul class="collection col s6 offset-s3">
          <li class="collection-item" v-for="todo in todos" :key="todo.id">
            <p>
              <label>
                <input
                  type="checkbox"
                  :checked="todo.done"
                  @change="todo.done = !todo.done"
                />
                <span>{{ todo.title }}</span>
                <span>
                  <a @click.prevent="deleteTodo(todo)">
                    <i class="material-icons right teal-text">X</i>
                  </a>
                </span>
              </label>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      todos: [],
      newTodo: "",
      Empty: false
    };
  },
  watch: {
    todos: {
      handler() {
        localStorage.todos = JSON.stringify(this.todos);
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.todos);
    }
  },
  methods: {
    submitTodo() {
      if (this.newTodo != "") {
        this.todos.push({
          title: this.newTodo,
          done: false
        });
      } else {
        this.Empty = true;

        setTimeout(() => {
          this.Empty = false;
        }, 3000);
      }

      this.newTodo = "";
    },
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    }
  }
};
</script>

<style>
.header {
  margin-top: 50px;
}
</style>
