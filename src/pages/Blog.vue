<template lang="pug">
  section.section
    select-date(:ymList="ymList", :date="ym")
    entry(:author="author")
</template>

<script>
  import { mapActions, mapState, mapMutations } from 'vuex'
  import SelectDate from 'components/SelectDate'
  import Entry from 'components/Entry'
  import { members } from 'src/ngzk46'

  export default {
    name: 'Blog',
    components: {
      'select-date': SelectDate,
      'entry': Entry
    },
    props: {
      name: {
        type: String,
      },
      ym: {
        type: String,
        default: '',
      },
    },
    created () {
      this.reset()
    },
    mounted () {
      if (!!this.ym && this.ymList.includes(this.ym)) this.updateDate(this.ym)
    },
    computed: {
      ...mapState(['date']),
    },
    data () {
      const member = members.find(m => m.link === this.name)
      const { name, link, ymList } = member
      return {
        ymList,
        author: { name, link },
      }
    },
    methods: {
      ...mapActions(['fetchEntries']),
      ...mapMutations(['reset', 'updateDate']),
    },
    watch: {
      date () {
        this.fetchEntries({ url: `/${this.author.link}`, date: this.date })
        this.$router.push(`${this.$route.name === 'blog' ? this.$route.path : '.'}/${this.date}`)
      },
    },
  }
</script>
