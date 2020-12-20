<template>
  <v-container class="lista" :class="animateInClass">
    <TodoCard v-for="(item, index) in todos" :key="index" :info="item" />
  </v-container>
</template>

<script>
import { animateInClass } from '../../constants/index'

export default {
  name: 'TodoList',

  components: {
    TodoCard: () => import('../TodoCard/TodoCard.vue')
  },

  data: () => ({
    animateInClass: animateInClass
  }),

  computed: {
    todos() {
      return this.$store.getters.allTodos
    }
  }
}
</script>

<style lang="sass" scoped>
.lista
  margin-top: 166px

.card
  margin-top: 10px

@media screen and (max-width: 500px)
  .lista
    margin-top: 207px

@media screen and (max-width: 355px)
  .lista
    margin-top: 244px
</style>
