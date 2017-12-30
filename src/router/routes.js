// Routes
import Top from 'src/pages/Top'
import Blog from 'src/pages/Blog'

export default [
  { path: '/', name: 'top', component: Top },
  { path: '/blog/:name', name: 'blog', component: Blog, props: true },
  { path: '/blog/:name/:ym', name: 'blogWithDate', component: Blog, props: true },
]
