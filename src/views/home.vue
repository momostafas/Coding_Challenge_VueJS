<template>
  <div>
    <v-flex xs6>
      <TodoForm />
      <TodoList/>
    </v-flex>
  </div>
</template>
<script>
import TodoForm from '@/components/todo-form'
import TodoList from '@/components/todo-list'
export default {
    name: 'Home',
  components: {
    TodoForm,
    TodoList,
  }
}
</script>