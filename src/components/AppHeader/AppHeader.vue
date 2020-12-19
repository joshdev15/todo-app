<template>
  <v-form class="app-header" @submit.prevent="submit">
    <div class="dinamic-container">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <h1
            class="header-title pointer"
            @click="$goToRoute('/')"
            v-on="on"
            v-bind="attrs"
          >
            TODO-APP
          </h1>
        </template>
        <span>Go Home</span>
      </v-tooltip>

      <div class="mb-1">
        <v-btn small rounded class="blue white--text mr-1">
          Filter
        </v-btn>

        <v-btn small rounded class="yellow" @click="$goToRoute('/favorites')">
          Favorites
        </v-btn>

        <v-btn
          small
          rounded
          class="red white--text ml-1"
          @click="toggleChecker"
        >
          Delete
        </v-btn>

        <v-btn
          small
          rounded
          class="cyan accent-4 white--text ml-1"
          @click="$goToRoute('/about')"
        >
          About
        </v-btn>
      </div>
    </div>

    <v-btn
      v-if="checker"
      color="red"
      class="white--text mt-7"
      large
      x-large
      block
      @click="deleteByGroup"
    >
      Delete all selected
    </v-btn>

    <v-text-field
      v-if="todoFieldStatus"
      v-model="content"
      label="New todo"
      hint="Enter you todo"
      persistent-hint
      clearable
      outlined
    />
  </v-form>
</template>

<script>
export default {
  name: 'AppHeader',

  data: () => ({
    content: ''
  }),

  methods: {
    submit() {
      const newTodo = this.$createTodoObject(this.content)
      this.content = ''
      this.$store.dispatch('addNewTodo', newTodo)
    },

    toggleChecker() {
      this.$store.dispatch('toggleChecker')
      this.$store.dispatch('toggleTodoField')
    },

    deleteByGroup() {
      this.$store.dispatch('deleteByGroup')
    }
  },

  computed: {
    todoFieldStatus() {
      return this.$store.getters.todoFieldIsActive
    },

    checker() {
      return this.$store.getters.checkerIsActive
    }
  }
}
</script>

<style lang="sass" scoped>
.app-header
  padding: 15px
  background: #ffffff90
  backdrop-filter: blur(20px)
  position: fixed
  z-index: 100
  width: 100%

.header-title
  color: #2196F3
  border-radius: 40px
  padding: 5px
  margin: 5px
  font-size: 20px
  &:hover
    background: #2196F3
    color: white

.dinamic-container
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center
  font-family: 'special'

.field
  border: 2px solid silver
  border-radius: 50px
  padding: 5px 10px
  font-size: 17px
  outline: none
  background: white
  &:active,
  &:hover,
  &:focus
    border: 2px solid orange

@media screen and (max-width: 500px)
  .app-header
    font-size: 25px

  .field
    font-size: 15px
</style>
