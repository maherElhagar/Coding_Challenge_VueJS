<template lang="html">
  <form @submit.prevent="addTodo">
    <v-text-field
      label="Todo"
      placeholder="What do you have to do?"
      solo
      v-model="task"
      required
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: "",
      newId: 0
    };
  },
  methods: {
    addTodo: function() {
      this.$store.dispatch("addTodo", this);
      this.newId++;
      this.task = "";
    }
  }
}
</script>

<style lang="css">
</style>
