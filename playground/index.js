import Saika from 'saika'
import 'saika/dist/saika.css'
import Demo from './components/Demo.vue'

new Saika({
  target: 'app',
  sourcePath: '/source',
  posts: [
    {
      title: '自定义组件规则',
      link: '/misc'
    }
  ],
  postMixins: [
    {
      components: {
        Demo
      }
    }
  ]
})