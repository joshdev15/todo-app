<template>
  <v-card shaped elevation="3" class="card">
    <v-card-title>
      <v-icon class="amber--text">
        {{ info.favorite ? 'mdi-star' : 'mdi-star-outline' }}
      </v-icon>
      {{ info.content }}
    </v-card-title>

    <v-card-subtitle class="pa-0 px-4 caption">
      {{ Date(info.date) }}
    </v-card-subtitle>

    <v-card-subtitle class="pa-0 px-4 caption">
      Todo ID: {{ info.id }}
    </v-card-subtitle>

    <v-switch class="pa-4 py-0" v-model="info.done" :label="'Done'"></v-switch>

    <v-card-actions>
      <v-btn small text color="info"> Edit <v-icon>mdi-pencil</v-icon></v-btn>

      <v-btn small text color="error">
        Delete <v-icon>mdi-trash-can</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'TodoCard',

  props: {
    info: {
      type: Object
    }
  }
}
</script>
