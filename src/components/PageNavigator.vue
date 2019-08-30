<template lang="pug">
  .columns
    .column.is-4.is-offset-4.flex
      a.button.is-primary.is-inverted.previous(:disabled="!getPreviousDate()", @click="previousLink")
        span.icon
          i.fa.fa-chevron-left
        span {{ getPreviousDate() | YYYYMM_JP }}
      a.button.is-primary.is-inverted(:disabled="!getNextDate()", @click="nextLink")
        span {{ getNextDate() | YYYYMM_JP }}
        span.icon
          i.fa.fa-chevron-right
</template>

<script>
  export default {
    name: 'PageNavigator',
    props: {
      ymList: {
        type: Array,
      },
      date: {
        type: String,
      },
      updateDate: {
        type: Function,
      },
    },
    methods: {
      previousLink () {
        const previousDate = this.getPreviousDate()
        if (previousDate) this.updateDate(previousDate)
      },
      nextLink () {
        const nextDate = this.getNextDate()
        if (nextDate) this.updateDate(nextDate)
      },
      getPreviousDate () {
        const selectedIndex = this.ymList.findIndex(ym => ym === this.date)
        if (selectedIndex === null || selectedIndex - 1 < 0) return null
        return this.ymList[selectedIndex - 1]
      },
      getNextDate () {
        const selectedIndex = this.ymList.findIndex(ym => ym === this.date)
        if (selectedIndex === null || this.ymList.length - 1 < selectedIndex + 1) return null
        return this.ymList[selectedIndex + 1]
      },
    },
  }
</script>

<style lang="sass" scoped>
  .flex
    display: flex

  .previous
    margin-right: auto
</style>
