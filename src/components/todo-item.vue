<template lang="html">
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">
          {{ task.title }}
        </h3>
      </div>
              <v-icon 
          v-if="task.done" 
          color="success" 
          fab 
          dark>done</v-icon>
    </v-card-title>
    <v-btn 
      v-if="!task.done"
      @click="completeTask(task.id)"
    >
      Complete
    </v-btn>
    <v-btn color="error">
      Delete
    </v-btn>
  </v-card>
</template>

<script>
import VueTypes from 'vue-types'
import task from '@/classes/task'
export default {
    props: {
        task: VueTypes.object
    },
    methods: {
      completeTask(id){
        task.update({
          id: id,
          done: true
        })
      }
    },
}
</script>

<style lang="css">
</style>
