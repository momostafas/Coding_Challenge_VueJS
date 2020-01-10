<template lang="html">
  <v-form 
    ref="form" 
    v-model="valid" 
    @submit="preventSubmission" 
    lazy-validation>
    <v-container fluid>
      <v-layout row>
        <v-flex xs8>
          <v-text-field 
            label="task" 
            v-model="task.title" 
            placeholder="What do you have to do?" 
            :rules="rules.required" 
            solo />
        </v-flex>
        <v-flex xs4>
          <v-checkbox 
            label="Done" 
            v-model="task.done" 
            required />
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import VueTypes from 'vue-types';
export default {
    data() {
        return {
            valid: true,
            rules: {
                required: [
                    v => !!v || 'Field is required',
                ]
            },
        }
    },
    props: {
        task: VueTypes.object
    },
    methods: {
        /**
         * Prevent form default submission.
         */
        preventSubmission(e) {
            e.preventDefault();
        }
    },
}
</script>

<style lang="css">
</style>