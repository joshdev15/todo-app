<template>
  <v-card class="pa-4 yellow lighten-4" outlined>
    <v-row justify="space-between" class="px-4 py-1">
      <h1>Filter</h1>

      <v-btn
        small
        rounded
        color="red"
        class="white--text"
        @click="toggleFilter"
      >
        close
      </v-btn>
    </v-row>

    <v-row class="d-flex px-4 py-0 align-center">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Filter by date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            clearable
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">
            Cancel
          </v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>

      <v-btn icon class="mx-2" @click="filterFavorite = !filterFavorite">
        <v-icon class="amber--text">
          {{ filterFavorite ? 'mdi-star' : 'mdi-star-outline' }}
        </v-icon>
      </v-btn>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'FilterPanel',

  data: () => ({
    date: '',
    menu: false,
    filterFavorite: false
  }),

  methods: {
    toggleFilter() {
      this.$store.dispatch('toggleFilter')
    }
  },

  watch: {
    date(nv, ov) {
      this.$store.dispatch('filter', {
        date: this.date,
        favorite: this.filterFavorite
      })
    },

    filterFavorite(nv, ov) {
      this.$store.dispatch('filter', {
        date: this.date,
        favorite: this.filterFavorite
      })
    }
  }
}
</script>
