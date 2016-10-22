// Mixin for init
import * as Types from 'vuex/types'
export default {
  created () {
    this.$store.dispatch(Types.INIT)
  }
}