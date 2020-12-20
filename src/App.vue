<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import ls from './services/localStorage'
import 'animate.css'

export default {
  name: 'App',

  mounted() {
    const existingTodos = JSON.parse(ls.get('allTodos'))
    if (existingTodos !== null) this.$store.dispatch('setExistingTodos')
  }
}
</script>

<style lang="sass">
@font-face
  font-family: 'special'
  src: url("../src/assets/fonts/MontserratAlternates-Medium.ttf")

*
  transition: all ease-out 0.3s

*::-webkit-scrollbar
  width: 7px
  height: 7px

*::-webkit-scrollbar-thumb
  background: dodgerblue

*::-webkit-scrollbar-thumb:hover
  border-radius: 10px

#app
  background: #dedede

.pointer
  cursor: pointer !important
</style>
