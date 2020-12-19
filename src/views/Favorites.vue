<template>
  <section class="animate__animated animate__fadeIn">
    <AppHeader />
    <FavoritesTodos />
  </section>
</template>

<script>
export default {
  name: 'Home',

  components: {
    AppHeader: () => import('../../src/components/AppHeader/AppHeader.vue'),
    FavoritesTodos: () => import('../../src/components/FavoritesTodos/FavoriteTodos.vue')
  }
}
</script>
