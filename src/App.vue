<template lang="jade">
  #app
    section.hero.is-info
      .hero-head
        .container
          nav.nav
            .nav-left
              a.nav-item(v-link="{path: '/'}")
                span.icon
                  i.fa.fa-bookmark
                span NgzkBlogArchive
            .nav-center
              a.nav-item(href="https://twitter.com/intent/tweet?url=http://re-fort.net/NgzkBlogArchive&text=NgzkBlogArchive%20-")
                span.icon
                  i.fa.fa-twitter-square
              a.nav-item(href="http://www.facebook.com/sharer.php?u=http://re-fort.net/NgzkBlogArchive&amp;t=NgzkBlogArchive")
                span.icon
                  i.fa.fa-facebook-square
              a.nav-item(href="https://github.com/re-fort/NgzkBlogArchive")
                span.icon
                  i.fa.fa-github-square
    router-view
    footer.footer
      .container
        .content.has-text-centered
          a(href="http://re-fort.net/")
            i.fa.fa-heart
            | merkmal
          .scrollToTop(v-if="position > 200" @click=("scrollToTop"))
            span.icon.is-large
              i.fa.fa-arrow-circle-up
</template>

<script>
export default {
  data () {
    return {
      position: 0
    }
  },
  ready: function() {
    let self = this;
    document.onscroll = function(e){
      self.position = document.documentElement.scrollTop || document.body.scrollTop;
    }
  },
  methods:{
    scrollToTop: function(){
      window.scrollTo(0,0);
    }
  }
}
</script>