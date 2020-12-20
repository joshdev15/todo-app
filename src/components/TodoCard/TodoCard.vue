<template>
  <v-card shaped outlined class="card">
    <v-card-actions v-if="checker" class="px-4 py-0">
      <v-switch
        v-model="info.check"
        color="red"
        inset
        :label="`Selected to delete: ${info.check ? 'Yes' : 'No'}`"
      ></v-switch>
    </v-card-actions>

    <v-card-title v-if="!editContent" class="pb-0">
      <v-row justify="space-between">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <h4
              class="pl-4 pointer"
              @dblclick="editContent = true"
              v-on="on"
              v-bind="attrs"
            >
              {{ info.content }}
            </h4>
          </template>
          <span>Double click to edit To Do</span>
        </v-tooltip>

        <v-btn icon class="mr-1">
          <v-icon class="amber--text" @click="changeFavorite">
            {{ info.favorite ? 'mdi-star' : 'mdi-star-outline' }}
          </v-icon>
        </v-btn>
      </v-row>
    </v-card-title>

    <v-form class="pa-4" v-if="editContent" @submit.prevent="changeContent">
      <v-text-field
        class="pb-2"
        v-model="newContent"
        :label="info.content"
        hint="Edit To Do and press enter to save"
        persistent-hint
        clearable
        outlined
      />

      <v-btn
        small
        color="red"
        class="white--text mb-2"
        @click="editContent = false"
      >
        Cancel
      </v-btn>

      <hr />
    </v-form>

    <v-checkbox
      class="pa-4 py-0"
      v-model="info.done"
      color="green"
      :label="`Done: ${info.done ? 'Yes!' : 'Not yet!'}`"
      @click="changeDone"
    ></v-checkbox>

    <v-row justify="space-between" class="pa-0 px-4">
      <v-card-subtitle class="pa-0 px-4 caption">
        <span class="green--text">Creation date:</span> {{ info.date }}
      </v-card-subtitle>

      <v-card-subtitle class="pa-0 px-4 caption">
        <span class="orange--text">ToDo ID:</span> {{ info.id }}
      </v-card-subtitle>
    </v-row>

    <v-card-actions>
      <v-btn small text color="error" @click="deleteTodo">
        Delete <v-icon>mdi-trash-can</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {
  DONE_PROPERTY,
  FAVORITE_PROPERTY,
  CONTENT_PROPERTY
} from '../../constants/index'

export default {
  name: 'TodoCard',

  props: {
    info: {
      type: Object
    }
  },

  data: () => ({
    editContent: false,
    newContent: ''
  }),

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

    changeContent() {
      if (this.newContent !== '') {
        this.$store.dispatch('updateTodo', {
          id: this.info.id,
          key: CONTENT_PROPERTY,
          value: this.newContent
        })
      }

      this.editContent = false
    },

    deleteTodo() {
      this.$store.dispatch('deleteTodo', this.info.id)
    }
  },

  computed: {
    checker() {
      return this.$store.getters.checkerIsActive
    }
  }
}
</script>
