import Saika from 'saika'
import 'saika/dist/saika.css'
import Demo from './components/Demo.vue'

new Saika({
  target: 'app',
  sourcePath: '/source',
  theme: 'readme',
  router: {
    mode: 'history'
  },
  postMixins: [
    {
      components: {
        Demo
      }
    }
  ]
})