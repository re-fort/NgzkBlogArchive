<template lang="pug">
  .columns
    .column.is-4.is-offset-4
      p.control
        span.select
          select(v-model="archive", @change="getEntries")
            option(v-for="ym in yms" v-bind:value="ym")
              | {{ ym | YYYYMM_JP }}
</template>

<script>
import Settings from 'settings'

export default {
  name: 'SelectForm',
  props: {
    yms: {
      type: Array
    },
    author: {
      type: Object
    }
  },
  data () {
    return {
      archive: ''
    }
  },
  methods: {
    getEntries: function() {
      this.$store.dispatch('fetchEntries', { url: this.author.url, archive: this.archive })
    }
  }
}
</script>
