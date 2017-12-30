<template lang="pug">
  section.section
    .columns.is-multiline
      .column.is-6(v-for="member in members")
        router-link.button.member(:to="getBlogLink(member.link)")
          span.icon
            i.fa.fa-user
          span {{ member.name }}
</template>

<script>
  import { members } from 'ngzk46'

  export default {
    name: 'Top',
    data () {
      return {
        members,
      }
    },
    methods: {
      getBlogLink (link) {
        return `blog/${link}`
      },
    },
  }
</script>

<style lang="sass" scoped>
  .member
    width: 100%
</style>
