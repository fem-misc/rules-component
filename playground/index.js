import Elm from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Form from '@femessage/el-form-renderer/src'

import MiscInputAge from './components/MiscInputAge.vue'

Vue.use(Elm)
Vue.component('el-form-renderer', Form)

window.MiscInputAge = MiscInputAge

new Docute({
  target: 'app',
  sourcePath: '/source',
  plugins: [
    docuteDemoCode()
  ],
  sidebar: [
    {
      title: 'Component',
      links: [
        {
          title: '自定义组件规则',
          link: '/misc'
        }
      ]
    }
  ]
})