<template lang="pug">
  #Top
    section.section
      .columns
        .column.is-4.is-offset-4(v-for="author in authors")
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
        }
      ]
    }
  }
}
</script>
