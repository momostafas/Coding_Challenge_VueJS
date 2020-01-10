<template lang="html">
  <div>
    <div v-if="tasks.length > 0">
      <TodoItem 
        v-for="task in tasks" 
        :key="task.id" 
        :task="task" 
        class="mb-3" />
    </div>
    <h1 
      align="center"
      v-else
      class="grey--text"
    >
      You have no tasks to be done yet!
    </h1>
  </div>
</template>

<script>
import TodoItem from '@/components/todo-item';
import task from '@/classes/task'
export default {
    components: {
        TodoItem,
    },
    computed: {
        tasks() {
            /**
              * Get all todo tasks and sort them by not done to done then by title.
            */
            return task.query()
            .orderBy('done')
            .orderBy('title')
            .get();
        }
    }
}
</script>
