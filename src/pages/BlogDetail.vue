<template lang="pug">
  section.section
    entry(:author="author", :entries="entries", :id="id", :date="date", sort="date", :isLoading="isLoading")
</template>

<script>
  import { mapActions, mapState, mapMutations } from 'vuex'
  import EntryDetail from 'components/EntryDetail'
  import { members } from 'src/ngzk46'

  export default {
    name: 'BlogDetail',
    components: {
      'entry': EntryDetail,
    },
    props: {
      name: {
        type: String,
      },
      ym: {
        type: String,
        default: '',
      },
      id: {
        type: String,
      },
    },
    created () {
      this.reset()
    },
    mounted () {
      if (!!this.ym && this.ymList.includes(this.ym)) this.updateDate(this.ym)
      this.fetchEntries({ url: `/${this.author.link}/entries/${this.date}.json` })
    },
    computed: {
      ...mapState(['date', 'entries', 'isLoading']),
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
  }
</script>
