<template lang="pug">
  section.section
    select-date(:ymList="ymList", :date="date", :updateDate="updateDate")
    entry(:author="author", :entries="entries", sort="date", order="asc", :sortEntries="sortEntries", :isLoading="isLoading")
    page-navigator(:ymList="ymList", :date="date", :updateDate="updateDate")
</template>

<script>
  import { mapActions, mapState, mapMutations, mapGetters } from 'vuex'
  import SelectDate from 'components/SelectDate'
  import Entry from 'components/Entry'
  import PageNavigator from 'components/PageNavigator'
  import { members } from 'src/ngzk46'

  export default {
    name: 'Blog',
    components: {
      'select-date': SelectDate,
      'entry': Entry,
      'page-navigator': PageNavigator,
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
      ...mapState(['date', 'entries', 'isLoading']),
      ...mapGetters(['sortEntries']),
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
        if (this.date === '') return
        this.fetchEntries({ url: `/${this.author.link}/entries/${this.date}.json` })
        window.scrollTo(0,0)
        this.$router.push(`${this.$route.name === 'blog' ? this.$route.path : '.'}/${this.date}`)
      },
    },
  }
</script>
