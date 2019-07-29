# 自定义组件规则

年龄表单项是自定义组件, 可以进行如下操作:

- 输入非数字后, 再失焦, 出现的错误提示是来自定义组件内部的规则验证

### Demo

<Demo />

```html
<el-form-renderer ref="form" :content="content">
  <el-button @click="validateForm">验证表单</el-button>
  <el-button @click="validateAge">仅验证年龄</el-button>
  <el-button @click="clearValidate">清除验证</el-button>
</el-form-renderer>

<script>
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
          label: '年龄😍',
          component: InputAge
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
```

### Component

InputAge(输入年龄)

```html
<template>
  <div class="misc">
    <el-input :value="value" @input="onInput"></el-input>
  </div>
</template>

<script>
export default {
  rules(item) {
    return [
      {
        required: true,
        trigger: 'blur',
        validator: (_, val, callback) => {
          if (!/\d+/.test(val)) {
            callback(new Error(`${item.label} 不能为空并且只能输入数字!`))
          } else {
            callback()
          }
        }
      }
    ]
  },

  props: ['value'],

  methods: {
    onInput(val) {
      this.$emit('input', val)
    }
  }
}
</script>
```