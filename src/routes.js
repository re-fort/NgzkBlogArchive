import Top from 'components/Top'
import MaiFukagawa from 'components/MaiFukagawa'
import NanamiHashimoto from 'components/NanamiHashimoto'

export default {
  routes: [
    {path: '/', component: Top},
    {path: '/mai.fukagawa', component: MaiFukagawa},
    {path: '/nanami.hashimoto', component: NanamiHashimoto}
  ]
}