<template>
  <section class="animate__animated animate__fadeIn">
    <AppHeader />
    <TodoList />
  </section>
</template>

<script>
export default {
  name: 'Home',

  components: {
    AppHeader: () => import('../../src/components/AppHeader/AppHeader.vue'),
    TodoList: () => import('../../src/components/TodoList/TodoList.vue')
  }
}
</script>
