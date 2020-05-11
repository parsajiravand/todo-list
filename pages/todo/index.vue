<template>
  <div>
    <div class="col-6 todo-form">
      <h2 class="text-center">Todo List</h2>
      <form @submit.prevent="Submit">
        <div class="form-group">
          <label for="">Todo List</label>
          <input
            type="text"
            class="form-control"
            v-model="newTodo"
            placeholder="Some Works"
          />
          <datetime
            name="date"
            type="datetime"
            v-model="dateTodo"
            placeholder="Enter Your Date"
            format="yyyy-MM-dd HH:mm"
            auto
          ></datetime>

          <label for="textTodo">Enter Text</label>
          <textarea
            class="form-control"
            name="textTodo"
            rows="3"
            v-model="textTodo"
            maxlength="300"
          ></textarea>

          <p
            id="helpId"
            class="form-text"
            :class="{ 'text-danger': emptyFieldError }"
          >
            Write Your Todo
          </p>

          <br />
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-3 todo-box" v-for="(todo, index) in todos" :key="index">
          <span class="todo-remove right" @click.prevent="deleteTodo(todo)"
            >X</span
          >

          <h5
            contenteditable="true"
            :class="{ done: todo.checked }"
            class="editme"
          >
            {{ todo.title }}
          </h5>
          <small contenteditable="true">{{
            todo.date | formatDate("MMMM Do YYYY, h:mm a")
          }}</small>
          <p class="todo-text" contenteditable="true">{{ todo.text }}</p>
          <label class="custom-control custom-checkbox right-align">
            <input
              type="checkbox"
              value="checkedValue"
              class="custom-control-input"
              :checked="todo.done"
              v-model="todo.checked"
            />

            <span class="custom-control-indicator"></span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todos: [],
      newTodo: "",
      dateTodo: "",
      textTodo: "",
      emptyFieldError: false,
      checked: false
    };
  },
  watch: {
    todos: {
      handler() {
        localStorage.todos = JSON.stringify(this.todos);
      }
    }
  },
  mounted() {
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.todos);
    }
  },
  methods: {
    Submit() {
      if (this.newTodo != "") {
        this.todos.push({
          title: this.newTodo,
          date: this.dateTodo,
          text: this.textTodo
        });
      } else {
        this.emptyFieldError = true;
        setTimeout(() => {
          this.emptyFieldError = false;
        }, 3000);
      }
    },

    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);

      this.todos.splice(todoIndex, 1);
    }
  }
};
</script>
<style scoped>
.todo-form {
  margin: 20px auto;
}
.todo-box {
  padding: 15px;
  box-shadow: 2px 2px 2px 2px #aaa;
  margin: 20px;
  min-height: 300px;
  height: auto;
  animation-delay: 1s;
}
/* Global Style */
.text-danger {
  color: red !important;
}
.done {
  text-decoration: line-through;
}

.todo-box .todo-remove {
  font-size: 20px;
  margin-bottom: 10px;
  color: red;
  cursor: pointer;
}
.todo-box .todo-text {
  padding: 10px;
}
</style>
