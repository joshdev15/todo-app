<template>
  <section :class="animateInClass">
    <AppHeader />
    <FavoritesList />
  </section>
</template>

<script>
import { animateInClass } from '../constants/index'

export default {
  name: 'Favorites',

  components: {
    AppHeader: () => import('../../src/components/AppHeader/AppHeader.vue'),
    FavoritesList: () =>
      import('../../src/components/FavoritesList/FavoriteList.vue')
  },

  data: () => ({
    animateInClass: animateInClass
  })
}
</script>
