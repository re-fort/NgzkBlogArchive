<template lang="jade">
  section.section
    .columns.is-mobile
      .column.is-4.is-offset-4(v-for="author in authors")
        a.button.author(v-link="{path: author.url}")
          span.icon
            i.fa.fa-user
          span {{ author.name }}
</template>

<script>
export default {
  data () {
    return {
      authors: [
        {
          name: '深川麻衣',
          url: '/mai.fukagawa'
        }
      ]
    }
  }
}
</script>
