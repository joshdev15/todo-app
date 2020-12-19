<template>
  <section class="animateInClass">
    <AppHeader />
    <FavoritesTodos />
  </section>
</template>

<script>
import { animateInClass } from '../constants/index'

export default {
  name: 'Home',

  components: {
    AppHeader: () => import('../../src/components/AppHeader/AppHeader.vue'),
    FavoritesTodos: () =>
      import('../../src/components/FavoritesTodos/FavoriteTodos.vue')
  },

  data: () => ({
    animateInClass: animateInClass
  })
}
</script>
