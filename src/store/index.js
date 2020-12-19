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
    todos: [],
    checker: false,
    todoField: true,
    filter: false
  },

  // MUTATIONS
  mutations: {
    SET_EXISTING_TODOS: state => {
      const existing = JSON.parse(ls.get(ALL_TODOS))
      state.todos = existing
    },

    ADD_NEW_TODO: (state, todo) => {
      state.todos.unshift(todo)
      updateTodosInMemory(state)
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
    },

    TOGGLE_CHECKER: state => {
      state.checker = !state.checker
      if (!state.checker) {
        state.todos.forEach(item => {
          item.check = false
        })

        updateTodosInMemory(state)
      }
    },

    TOGGLE_TODO_FIELD: state => {
      state.todoField = !state.todoField
    },

    DELETE_BY_GROUP: state => {
      const newTodoList = state.todos.filter(item => item.check === false)
      state.todos = newTodoList
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
    },

    toggleChecker: ({ commit }) => {
      commit('TOGGLE_CHECKER')
    },

    toggleTodoField: ({ commit }) => {
      commit('TOGGLE_TODO_FIELD')
    },

    deleteByGroup: ({ commit }) => {
      commit('DELETE_BY_GROUP')
    }
  },

  // GETTERS
  getters: {
    allTodos: state => (state.todos.length === 0 ? null : state.todos),
    favoriteTodos: state =>
      state.todos.length === 0
        ? null
        : state.todos.filter(item => item.favorite === true),
    checkerIsActive: state => state.checker,
    todoFieldIsActive: state => state.todoField
  }
})
