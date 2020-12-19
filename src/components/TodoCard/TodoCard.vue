<template>
  <v-card shaped elevation="3" class="card">
    <v-card-title>
      <v-btn icon class="mr-1">
        <v-icon class="amber--text" @click="changeFavorite">
          {{ info.favorite ? 'mdi-star' : 'mdi-star-outline' }}
        </v-icon>
      </v-btn>
      <span>{{ info.content }}</span>
    </v-card-title>

    <v-switch
      class="pa-4 py-0"
      v-model="info.done"
      color="green"
      inset
      :label="`Done: ${info.done ? 'Yes!' : 'Not yet!'}`"
      @click="changeDone"
    ></v-switch>

    <v-card-subtitle class="pa-0 px-4 caption">
      {{ Date(info.date) }}
    </v-card-subtitle>

    <v-card-subtitle class="pa-0 px-4 caption">
      Todo ID: {{ info.id }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn small text color="info"> Edit <v-icon>mdi-pencil</v-icon></v-btn>

      <v-btn small text color="error" @click="deleteTodo">
        Delete <v-icon>mdi-trash-can</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { DONE_PROPERTY, FAVORITE_PROPERTY } from '../../constants/index'

export default {
  name: 'TodoCard',

  props: {
    info: {
      type: Object
    }
  },

  methods: {
    changeDone() {
      this.$store.dispatch('updateTodo', {
        id: this.info.id,
        key: DONE_PROPERTY,
        value: this.info.done
      })
    },

    changeFavorite() {
      this.$store.dispatch('updateTodo', {
        id: this.info.id,
        key: FAVORITE_PROPERTY,
        value: !this.info.favorite
      })
    },

    deleteTodo() {
      this.$store.dispatch('deleteTodo', this.info.id)
    }
  }
}
</script>
