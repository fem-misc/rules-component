<template>
  <el-form-renderer ref="form" :content="content">
    <el-button @click="validateForm">验证表单</el-button>
    <el-button @click="validateAge">仅验证自定义组件</el-button>
    <el-button @click="clearValidate">清除验证</el-button>
  </el-form-renderer>
</template>

<script>
import Elm from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Form from '@femessage/el-form-renderer'

import InputAge from './InputAge.vue'

Vue.use(Elm)

export default {
  data() {
    return {
      content: [
        {
          id: 'name',
          label: '姓名',
          type: 'input',
          rules: [
            {
              required: true,
              trigger: 'blur',
              message: '请输入你的大名!'
            }
          ]
        },
        {
          id: 'age',
          label: '自定义组件',
          component: InputAge
        },
        {
          id: 'age1',
          label: '被覆盖规则的自定义组件',
          component: InputAge,
          overrideRules: true,
          rules: [
            {
              required: true,
              trigger: 'blur',
              message: '组件内置的校验规则已经不生效了'
            }
          ]
        }
      ]
    }
  },
  methods: {
    validateForm() {
      this.$refs.form.validate()
    },
    validateAge() {
      this.$refs.form.validateField('age')
    },
    clearValidate() {
      this.$refs.form.clearValidate()
    }
  }
}
</script>
