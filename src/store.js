import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import task from './classes/task'

Vue.use(Vuex)

const database = new VuexORM.Database();
database.register(task);

export default new Vuex.Store({
  plugins: [
    VuexORM.install(database)
  ]
})
