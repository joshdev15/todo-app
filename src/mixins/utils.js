import { v4 as uuid } from 'uuid'

export default {
  name: 'UtilsMixin',

  methods: {
    $goToRoute(route) {
      if (this.$route.path !== route) this.$router.push(route)
    },

    $createTodoObject(content) {
      return {
        content: content,
        date: Date.now(),
        favorite: false,
        done: false,
        id: uuid(),
        check: false
      }
    }
  }
}
