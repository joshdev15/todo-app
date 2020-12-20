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
    todoField: true,
    checker: false,
    filter: false,
    filterDate: '',
    filterFavorite: false,
    filteredTodos: []
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
      if (state.todoField) {
        state.checker = false
      }
    },

    TOGGLE_FILTER: state => {
      state.filter = !state.filter

      if (state.filter) {
        state.filteredTodos = state.todos
      }
    },

    DELETE_BY_GROUP: state => {
      const newTodoList = state.todos.filter(item => item.check === false)
      state.todos = newTodoList
      state.filteredTodos = newTodoList
      updateTodosInMemory(state)
    },

    FILTER: (state, filterInfo) => {
      const dateEmpty = [null, ''].includes(filterInfo.date)

      if (!dateEmpty) {
        // if date is not empty; filter by date
        state.filteredTodos = state.todos.filter(todo => {
          return todo.date === filterInfo.date
        })
      } else if (filterInfo.favorite) {
        // if favorite is true; filter by favorite
        state.filteredTodos = state.todos.filter(todo => todo.favorite === true)
      } else if (!dateEmpty && filterInfo.favorite) {
        // if date is not empty and favorite is true; filter by both values
        state.filteredTodos = state.todos.filter(
          todo => todo.date === filterInfo.date && todo.favorite === true
        )
      } else {
        // else
        state.filteredTodos = state.todos
      }
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

    toggleFilter: ({ commit }) => {
      commit('TOGGLE_FILTER')
    },

    deleteByGroup: ({ commit }) => {
      commit('DELETE_BY_GROUP')
    },

    filter: ({ commit }, date) => {
      commit('FILTER', date)
    }
  },

  // GETTERS
  getters: {
    allTodos: state => (state.todos.length === 0 ? null : state.todos),

    favoriteTodos: state => {
      return state.todos.length === 0
        ? state.todos
        : state.todos.filter(item => item.favorite === true)
    },

    checkerIsActive: state => state.checker,

    todoFieldIsActive: state => state.todoField,

    filterIsActive: state => state.filter,

    filteredTodos: state => state.filteredTodos
  }
})
