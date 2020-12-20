<template>
  <v-container class="lista" :class="animateInClass">
    <FilterPanel />
    <TodoCard v-for="(item, index) in todos" :key="index" :info="item" />
  </v-container>
</template>

<script>
import { animateInClass } from '../../constants/index'

export default {
  name: 'FilterList',

  components: {
    TodoCard: () => import('../TodoCard/TodoCard.vue'),
    FilterPanel: () => import('../FilterPanel/FilterPanel.vue')
  },

  data: () => ({
    animateInClass: animateInClass
  }),

  computed: {
    todos() {
      return this.$store.getters.filteredTodos
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
    margin-top: 109px
</style>
