<template>
  <section :class="animateInClass">
    <AppHeader />
    <FilterList v-if="filterIsActive" />
    <TodoList v-if="!filterIsActive" />
  </section>
</template>

<script>
import { animateInClass } from '../constants/index'

export default {
  name: 'Home',

  components: {
    AppHeader: () => import('../../src/components/AppHeader/AppHeader.vue'),
    TodoList: () => import('../../src/components/TodoList/TodoList.vue'),
    FilterList: () => import('../components/FilterList/FilterList.vue')
  },

  data: () => ({
    animateInClass: animateInClass
  }),

  computed: {
    filterIsActive() {
      return this.$store.getters.filterIsActive
    }
  }
}
</script>
