export default {
  name: 'UtilsMixin',

  methods: {
    $goToRoute(route) {
      this.$router.push(route)
    }
  }
}
