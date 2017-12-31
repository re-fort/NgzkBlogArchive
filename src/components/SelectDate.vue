<template lang="pug">
  .columns
    .column.is-4.is-offset-4
      p.control
        span.select
          select(v-model="selectedDate")
            option(v-for="ym in ymList", :value="ym")
              | {{ ym | YYYYMM_JP }}
</template>

<script>
  export default {
    name: 'SelectDate',
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
    computed: {
      selectedDate: {
        get () {
          return this.date
        },
        set (value) {
          this.updateDate(value)
        }
      },
    },
  }
</script>

<style lang="sass" scoped>
  .select
    width: 100%

  select
    width: 100%
</style>
