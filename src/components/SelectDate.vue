<template lang="pug">
  .columns
    .column.is-4.is-offset-4
      p.control
        span.select
          select(v-model="selectedDate", @change="changeDate")
            option(v-for="ym in ymList", :value="ym")
              | {{ ym | YYYYMM_JP }}
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'SelectDate',
    props: {
      ymList: {
        type: Array,
      },
    },
    computed: {
      ...mapState(['date']),
      selectedDate: {
        get () {
          return this.date
        },
        set (value) {
          this.updateDate(value)
        }
      },
    },
    methods: {
      ...mapMutations(['updateDate']),
      changeDate() {
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
