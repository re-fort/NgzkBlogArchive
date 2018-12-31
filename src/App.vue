<template lang="pug">
  #app
    section.hero.is-info
      .container
        nav.navbar.hero.is-info
          .navbar-brand
            router-link.nav-item(:to="'/'")
              span.icon
                i.fa.fa-bookmark
              span NgzkBlogArchive
            .navbar-menu.is-active
              .navbar-end
                .navbar-item
                  a.navbar-item(href="https://twitter.com/intent/tweet?url=http://re-fort.net/NgzkBlogArchive&text=NgzkBlogArchive%20-")
                    span.icon
                      i.fa.fa-twitter-square.fa-2x
                  a.navbar-item(href="https://github.com/re-fort/NgzkBlogArchive")
                    span.icon
                      i.fa.fa-github-square.fa-2x
    router-view
    footer.footer
      .container
        .content.has-text-centered
          a(href="https://re-fort.net/KykzkBlogArchive")
            i.fa.fa-heart
            | KykzkBlogArchive
        .content.has-text-centered
          a(href="https://re-fort.net/")
            i.fa.fa-heart
            | merkmal
          .scrollToTop(v-if="position > 200", @click=("scrollToTop"))
            span.icon.is-large
              i.fa.fa-arrow-circle-up.fa-3x
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'App',
    data () {
      return {
        position: 0
      }
    },
    created () {
      document.onscroll = () => {
        this.position = document.documentElement.scrollTop || document.body.scrollTop
      }
    },
    methods: {
      ...mapActions(['ping']),
      scrollToTop () {
        window.scrollTo(0,0)
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "src/stylesheets/variables"

  #app
    display: flex
    min-height: 100vh
    flex-direction: column

  .section
    flex: 1

  .hero.is-info
    background: $main-color

  .navbar-item
    color: $navbar-item-color

  a.navbar-item
    &:hover
      background-color: transparent

  .scrollToTop
    position: fixed
    bottom: 10px
    right: 10px
    color: $main-color
    &:hover
      cursor: pointer

  .footer a:not(.icon), .footer a:visited:not(.icon)
    border-bottom: none

  @media screen and (max-width: 1023px)
    .navbar-menu
      background-color: initial
      box-shadow: initial
      padding: initial
</style>
