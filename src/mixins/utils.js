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
        date: this.$nowDate(),
        favorite: false,
        done: false,
        id: uuid(),
        check: false
      }
    },

    $nowDate() {
      const date = new Date(Date.now())

      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }
  }
}
