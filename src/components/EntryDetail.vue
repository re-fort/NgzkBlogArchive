<template lang="pug">
  .columns
    .column.is-8.is-offset-2
      a.button.is-light.is-loading(v-show="isLoading")
      div(v-for="entry in selectedEntries")
        h1.clearfix(:id="entry.id")
          span.date
            span.yearmonth
              | {{ entry.date | YYYY/MM }}
            span.daydate
              span.dd1
                | {{ entry.date | DD }}
          span.heading
            span.author
              | {{ author.name }}
            span.entrytitle(:to="blog/id")
              | {{ entry.title }}
        .fkd
        .entrybody(v-html="entry.body")
        .entrybottom
        div.footer-wrapper
          div.twitter-share-button-wrapper
            a.twitter-share-button(href="https://twitter.com/share?ref_src=twsrc%5Etfw", :data-text="entry.title", :data-url="'https://re-fort.net/NgzkBlogArchive/#/blog/'+author.link+'/'+date+'/'+entry.id", data-size="large" data-show-count="false")
              | ツイート
        Adsense(data-ad-client="ca-pub-6267609390272538" data-ad-slot="8987583712")
</template>

<script>
  import Adsense from 'vue-google-adsense/dist/Adsense.min.js'
  Vue.use(require('vue-script2'))
  Vue.use(Adsense)

  export default {
    name: 'EntryDetail',
    props: {
      author: {
        type: Object,
      },
      entries: {
        type: Array,
      },
      id: {
        type: String,
      },
      date: {
        type: String,
      },
      isLoading: {
        type: Boolean,
      },
    },
    updated () {
      if (window.twttr) {
        window.twttr.widgets.load();
      }
    },
    computed: {
      selectedEntries () {
        const entry = this.entries.filter(entry => this.id === entry.id);
        return entry
      },
    },
  }
</script>

<style lang="sass" scoped>
  @import "src/stylesheets/variables"

  .is-loading
    width: 100%

  .clearfix:after
    content: "."
    display: block
    height: 0
    clear: both
    visibility: hidden

  h1
    border: solid 3px $main-color
    background: url(data:image/gifbase64,R0lGODlhZAAFAIAAAH8QgwAAACH5BAAAAAAALAAAAABkAAUAAAIUhI+py+0Po5y02ouz3rz7D4biiBQAOw==) 0 0 repeat-y
    -moz-border-radius: 6px
    -webkit-border-radius: 6px
    border-radius: 6px

    .date
      float: left
      width: 100px
      background: $main-color
      display: block
      color: #fff
      text-align: center
      padding: 10px 0
      font-family: futura,arial
      font-weight: normal
      line-height: 1
      overflow: hidden

    .yearmonth
      text-align: left
      padding: 0 10px
      display: block

    .daydate
      display: block

    .dd1
      font-size: 45px

    .heading
      float: left
      color: $main-color

    .author
      display: block
      border-bottom: dashed 1px $main-color
      padding: 10px 0 5px
      margin: 0 8px
      font-weight: normal
      line-height: 1

    .entrytitle
      display: block
      padding: 8px 0
      margin: 0 5px
      font-size: 120%
      line-height: 1.2

  .fkd
    background: url(data:image/gifbase64,R0lGODlhDAAGALMAAJxFn5lAnPHm8rV1uN/E4LFts/Dj8Ny+3ahcqoEThMOPxfz5/IokjX8Qg////wAAACH5BAAAAAAALAAAAAAMAAYAAAQd0I1GKy3OLWBpWJkjMBZjhBmRUMmBhgqlvCiCvBEAOw==) 0 0 no-repeat
    width: 12px
    height: 15px
    margin-left: 45px

  .entrybody
    line-height: 2
    padding: 0 6px 20px

  .entrybottom
    border-top: dashed 1px $main-color
    padding: 0.5em 0
    font-size: 85%
    text-align: center

  .footer-wrapper
    display: flex
    justify-content: flex-start
    margin-bottom: 2rem

  .adswrapper
    margin-bottom: 20px
    max-height: 300px

  @media screen and (max-width: 640px)
    h1
      .heading
        float: inherit

      .author
        padding: 10px 5px 5px
        margin: 0
</style>
