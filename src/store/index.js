import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuid } from 'uuid'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        content: 'hola esto es un item de prueba',
        date: Date.now().toLocaleString(),
        favorite: false,
        done: true,
        id: uuid()
      },
      {
        content: 'hola esto es un item de prueba',
        date: Date.now().toLocaleString(),
        favorite: true,
        done: false,
        id: uuid()
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    allTodos: state => (state.todos.length === 0 ? null : state.todos)
  }
})
