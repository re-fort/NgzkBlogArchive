<template lang="pug">
  .columns
    .column.is-8.is-offset-2
      a.button.is-light.is-loading(v-show="isLoading")
      div(v-for="entry in entries")
        h1.clearfix
          span.date
            span.yearmonth
              | {{ entry.date | YYYY/MM }}
            span.daydate
              span.dd1
                | {{ entry.date | DD }}
          span.heading
            span.author
              | {{ author.name }}
            span.entrytitle
              | {{ entry.title }}
        .fkd
        .entrybody(v-html="entry.body")
        .entrybottom
</template>

<script>
export default {
  name: 'Entry',
  props: {
    author: {
      type: Object
    }
  },
  computed: {
    entries () {
      return _.orderBy(this.$store.state.entries, 'date')
    },
    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>
