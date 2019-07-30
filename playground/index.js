import Saika from 'saika'
import 'saika/dist/saika.css'
import Demo from './components/Demo.vue'
import OverrideDemo from './components/OverrideDemo.vue'

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
        Demo,
        OverrideDemo
      }
    }
  ]
})