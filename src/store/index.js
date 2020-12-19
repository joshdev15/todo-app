import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../services/localStorage'
import { ALL_TODOS } from '../constants/index'

Vue.use(Vuex)

const updateTodosInMemory = state => {
  const stringTodos = JSON.stringify(state.todos)
  ls.set(ALL_TODOS, stringTodos)
}

export default new Vuex.Store({
  // STATE
  state: {
    todos: []
  },

  // MUTATIONS
  mutations: {
    SET_EXISTING_TODOS: state => {
      const existing = JSON.parse(ls.get(ALL_TODOS))
      state.todos = existing
    },

    ADD_NEW_TODO: (state, todo) => {
      state.todos.unshift(todo)
      updateTodosInMemory()
    },

    UPDATE_TODO: (state, infoObj) => {
      state.todos.forEach(item => {
        if (item.id === infoObj.id) {
          item[infoObj.key] = infoObj.value
        }
      })

      updateTodosInMemory(state)
    },

    DELETE_TODO: (state, todoID) => {
      const newTodos = state.todos.filter(item => {
        if (item.id !== todoID) {
          return item
        }
      })

      state.todos = newTodos
      updateTodosInMemory(state)
    }
  },

  // ACTIONS
  actions: {
    addNewTodo: ({ commit }, todo) => {
      commit('ADD_NEW_TODO', todo)
    },

    setExistingTodos: ({ commit }) => {
      commit('SET_EXISTING_TODOS')
    },

    updateTodo: ({ commit }, infoObj) => {
      if (infoObj.id && infoObj.key) {
        commit('UPDATE_TODO', infoObj)
      }
    },

    deleteTodo: ({ commit }, todoID) => {
      commit('DELETE_TODO', todoID)
    }
  },

  // GETTERS
  getters: {
    allTodos: state => (state.todos.length === 0 ? null : state.todos)
  }
})
