<template>
  <div class="about">
    <h1 class="blue--text pointer" @click="$goToRoute('/')">TODO-APP</h1>
    <p>Test application</p>
    <p>In this application the following tools were used</p>
    <ul>
      <li>Vue CLI</li>
      <li>Vue (version 2)</li>
      <li>Vuex</li>
      <li>Vue Router</li>
      <li>Vuetify</li>
      <li>Animate.css</li>
      <li>UUID</li>
    </ul>
    <p>Thanks for your attention</p>
    <small class="red--text">Click in TODO-APP to go home</small>
  </div>
</template>

<style lang="sass" scoped>
.about
  width: 100vw
  height: 100vh
  display: flex
  flex-flow: column
  justify-content: center
  align-items: center
  font-family: 'special'
</style>
