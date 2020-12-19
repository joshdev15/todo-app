<template>
  <v-form class="app-header" @submit.prevent="submit">
    <div class="dinamic-container">
      <h1 class="blue--text pointer" @click="$goToRoute('/')">TODO-APP</h1>

      <div class="mb-1">
        <v-btn small rounded class="blue white--text mr-1">
          Filter
        </v-btn>

        <v-btn small rounded class="yellow" @click="$goToRoute('/favorites')">
          Favorites
        </v-btn>

        <v-btn small rounded class="red white--text ml-1">
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

    <v-text-field
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
    }
  }
}
</script>

<style lang="sass" scoped>
.app-header
  padding: 15px
  background: #ffffff90
  backdrop-filter: blur(20px)
  font-size: 20px
  position: fixed
  z-index: 100
  width: 100%

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

.pointer
  cursor: pointer !important

@media screen and (max-width: 500px)
  .app-header
    font-size: 25px

  .field
    font-size: 15px
</style>
