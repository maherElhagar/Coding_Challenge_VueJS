<template lang="html">
  <div>
    <TodoItem class="mb-3" />
  </div>
</template>

<script>
import TodoItem from '@/components/todo-item';


export default {
  name: 'Todos',
  components: {
    TodoItem,
  }
}
</script>

<style lang="css">
</style>
