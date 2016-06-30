<template lang="jade">
  .columns.is-mobile
    .column.is-4.is-offset-4
      p.control
        span.select
          select(v-model="archive" @change="getEntrys")
            option(v-for="ym in yms" v-bind:value="ym" v-text="ym | YYYYMM_JP")
</template>

<script>
import Settings from 'settings'
export default {
  props: {
    yms: {
      type: Array
    },
    author: {
      type: Object
    },
    entrys: {
      type: Array,
      twoWay: true
    },
    loading: {
      type: Boolean,
      twoWay: true
    }
  },
  data () {
    return {
      archive: ''
    }
  },
  methods: {
    getEntrys: function() {
      this.entrys = []
      this.loading = true
      this.$http.get(Settings.Api.root + `${this.author.url}/${this.archive}`)
      .then(function (response) {
        this.entrys = response.data
        this.loading = false
      }, function (response) {
        console.log(response);
      })
    }
  }
}
</script>
