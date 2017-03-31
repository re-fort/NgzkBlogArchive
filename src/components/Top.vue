<template lang="pug">
  #Top
    section.section
      .columns.is-multiline
        .column.is-6(v-for="author in authors")
          router-link.button.author(:to="author.url")
            span.icon
              i.fa.fa-user
            span {{ author.name }}
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      authors: [
        {
          name: '深川麻衣',
          url: '/mai.fukagawa'
        },
        {
          name: '橋本奈々未',
          url: '/nanami.hashimoto'
        }
      ]
    }
  }
}
</script>
