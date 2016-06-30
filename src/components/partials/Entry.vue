<template lang="jade">
  .columns
    .column.is-8.is-offset-2
      a.button.is-light.is-loading(v-show="loading")
      div(v-for="entry in entrys | orderBy 'date'")
        h1.clearfix
          span.date
            span.yearmonth(v-text="entry.date | YYYY/MM")
            span.daydate
              span.dd1(v-text="entry.date | DD")
          span.heading
            span.author
              | {{ author.name }}
            span.entrytitle
              | {{ entry.title }}
        .fkd
        .entrybody
          | {{{ entry.body }}}
        .entrybottom
</template>

<script>
export default {
  props: {
    entrys: {
      type: Array
    },
    author: {
      type: Object
    },
    loading: {
      type: Boolean
    }
  }
}
</script>
