<template lang="html">
  <div>
    <v-card 
      v-for="todo in todos"
      :key="todo.id"
      :class="{completed: todo.completed}"
      class="task"
      @click="toggleTodo(todo.id)"
    >
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ todo.task }}</h3>
        </div>
      </v-card-title>
      <v-btn
        @click="toggleTodo(todo.id)"
      >
        Complete
      </v-btn>
      <v-btn 
        color="error" 
        @click="deleteTodo(todo.id)"
      >
        Delete
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    }
  },
  methods: {
    toggleTodo: function(id) {
      this.$store.dispatch("toggleTodo", id);
    },
    deleteTodo: function(id) {
      this.$store.dispatch("deleteTodo", id);
    },
  }
}
</script>

<style lang="css">
.completed h3 {
  text-decoration: line-through;
}
</style>
