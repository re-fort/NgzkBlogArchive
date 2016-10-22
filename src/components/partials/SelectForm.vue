<template lang="pug">
  .columns
    .column.is-4.is-offset-4
      p.control
        span.select
          select(v-model="archive" @change="getEntrys")
            option(v-for="ym in yms" v-bind:value="ym")
              | {{ ym | YYYYMM_JP }}
</template>

<script>
import Settings from 'settings'
import * as Types from 'vuex/types'
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
    getEntrys: function() {
      this.$store.dispatch(Types.FETCH_ENTRYS, {url: this.author.url, archive: this.archive})
    }
  }
}
</script>
