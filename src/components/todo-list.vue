<template lang="html">
  <div>
    <TodoItem 
      v-for="task in tasks" 
      :key="task.id" 
      :task="task" 
      class="mb-3" />
  </div>
</template>

<script>
import TodoItem from '@/components/todo-item';
import task from '@/classes/task'
export default {
  components: {
    TodoItem,
  },
  computed:{
    tasks(){
      return task.all();
    }
  }
}
</script>

<style lang="css">
</style>
