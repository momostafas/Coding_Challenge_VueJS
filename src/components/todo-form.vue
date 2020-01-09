<template lang="html">
  <v-form 
    ref="form" 
    v-model="valid" 
    @submit="insertTask" 
    lazy-validation>
    <v-text-field 
      label="Todo" 
      placeholder="What do you have to do?" 
      v-model="title"
      :rules="rules.required"
      solo />
  </v-form>
</template>

<script>
import task from '../classes/task'
export default {
    data() {
        return {
            valid: true,
            title: '',
                  rules: {
                required: [
                    v => !!v || 'Field is required',
                ]
            }
        }
    },
    methods: {
        insertTask(e) {
            e.preventDefault();
            if (this.$refs.form.validate()) {
                task.insert({
                    data: {
                        title: this.title
                    }
                })
                this.$refs.form.reset()
            }
        }
    },
}
</script>

<style lang="css">
</style>
