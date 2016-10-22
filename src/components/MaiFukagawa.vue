<template lang="pug">
  #MaiFukagawa
    section.section
      select-form(v-bind:yms="yms"
                  v-bind:author="author")
    section.section
      entry(v-bind:author="author")
</template>

<script>
import SelectForm from 'components/partials/SelectForm'
import Entry from 'components/partials/Entry'
import mixinInit from 'mixins/init'
export default {
  name: 'MaiFukagawa',
  components: {
    'select-form': SelectForm,
    'entry': Entry
  },
  mixins: [mixinInit],
  data () {
    return {
      yms: ['201111','201112','201201','201202','201203','201204','201205','201206','201207','201208','201209','201210','201211','201212','201301','201302','201303','201304','201305','201306','201307','201308','201309','201310','201311','201312','201401','201402','201403','201404','201405','201406','201407','201408','201409','201410','201411','201412','201501','201502','201503','201504','201505','201506','201507','201508','201509','201510','201511','201512','201601','201602','201603','201604','201605','201606'],
      author: {
        name: '深川麻衣',
        url: '/mai.fukagawa'
      }
    }
  }
}
</script>
