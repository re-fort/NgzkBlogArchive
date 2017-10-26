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
          a(href="http://re-fort.net/")
            i.fa.fa-heart
            | merkmal
          .scrollToTop(v-if="position > 200", @click=("scrollToTop"))
            span.icon.is-large
              i.fa.fa-arrow-circle-up.fa-3x
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      position: 0
    }
  },
  created: function() {
    let self = this
    document.onscroll = function(e){
      self.position = document.documentElement.scrollTop || document.body.scrollTop
    }
  },
  methods:{
    scrollToTop: function(){
      window.scrollTo(0,0)
    }
  }
}
</script>
