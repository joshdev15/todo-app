<template>
  <v-container class="lista">
    <TodoCard v-for="(item, index) in todos" :key="index" :info="item" />
  </v-container>
</template>

<script>
export default {
  name: 'FavoritesTodos',

  components: {
    TodoCard: () => import('../TodoCard/TodoCard.vue')
  },

  computed: {
    todos() {
      console.log(this.$store.getters.favoriteTodos)
      return this.$store.getters.favoriteTodos
    }
  }
}
</script>

<style lang="sass" scoped>
.lista
  margin-top: 152px

.card
  margin-top: 10px

@media screen and (max-width: 500px)
  .lista
    margin-top: 109px
</style>
