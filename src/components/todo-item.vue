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
    <v-dialog 
      v-model="deleteDialog" 
      persistent 
      max-width="290">
      <v-btn 
        slot="activator" 
        color="error">
        Delete
      </v-btn>
      <v-card>
        <v-card-title class="headline">Confirm Deletion</v-card-title>
        <v-card-text>Delete this task ?</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn 
            color="green darken-1" 
            flat 
            outline 
            @click.native="deleteDialog = false">Cancel</v-btn>
          <v-btn 
            color="error darken-1" 
            flat 
            outline 
            @click="deleteTask(task.id)">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import VueTypes from 'vue-types'
import task from '@/classes/task'
export default {
  data() {
    return {
                  deleteDialog: false,
    }
  },
    props: {
        task: VueTypes.object
    },
    methods: {
      completeTask(id){
        task.update({
          id: id,
          done: true
        })
      },
      deleteTask(id){
        task.delete(id)
      },
    },
}
</script>

<style lang="css">
</style>
