// Mixin for init
export default {
  created () {
    this.$store.dispatch('init')
  }
}
