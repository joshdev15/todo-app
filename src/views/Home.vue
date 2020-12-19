<template>
  <section :class="animateInClass">
    <AppHeader />
    <TodoList />
  </section>
</template>

<script>
import { animateInClass } from '../constants/index'

export default {
  name: 'Home',

  components: {
    AppHeader: () => import('../../src/components/AppHeader/AppHeader.vue'),
    TodoList: () => import('../../src/components/TodoList/TodoList.vue')
  },

  data: () => ({
    animateInClass: animateInClass
  })
}
</script>
