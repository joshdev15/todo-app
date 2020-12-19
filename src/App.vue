<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import 'animate.css'

export default {
  name: 'App'
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
  background: #34699a
  border-radius: 10px

#app
  background: #f4f4f4
</style>
