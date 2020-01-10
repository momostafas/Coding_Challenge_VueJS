<template lang="html">
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">
          {{ task.title }}
        </h3>
        <v-icon 
          v-if="task.done" 
          color="success" 
          fab 
          dark>done</v-icon>

      </div>
    </v-card-title>
    <v-btn v-if="!task.done">
      Complete
    </v-btn>
    <v-btn color="error">
      Delete
    </v-btn>
  </v-card>
</template>

<script>
import VueTypes from 'vue-types'

export default {
    props: {
        task: VueTypes.object
    }
}
</script>

<style lang="css">
</style>
