// Mixin for init
import * as Types from 'vuex/types'
export default {
  created () {
    console.log("Hello")
    this.$store.dispatch(Types.INIT)
  }
}