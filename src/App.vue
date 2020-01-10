<template>
  <v-app>
    <v-toolbar
      app
    >
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <v-layout
        align-center
        fill-height
        justify-center
      >
        <home />
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import home from '@/views/home'
export default {
  name: 'App',
  components: {
    home
  },
  data () {
    return {
      title: 'Vue Todos'
    }
  }
}
</script>
