# 设置规则

通过设立跟 el-form-renderer 约定的属性,去设置 el-form-renderer 本身

可以查看自定义组件[高亮的代码](#component)

### Demo

失去焦点时触发验证

:::demo
```html
<el-form-renderer :content="content"></el-form-renderer>

<script>
export default {
  data() {
    return {
      content: [
        {
          id: 'input',
          label: '输入框',
          component: Input
        }
      ]
    }
  }
}
</script>
```
:::

### Component

```html {highlight: ['9-19']}
<template>
  <el-input :value="value" @input="onInput"></el-input>
</template>

<script>
export default {
  name: 'InputNumber',

  componentApi: {
    rules() {
      return [
        {
          required: true,
          trigger: 'blur',
          message: '请输入内容'
        }
      ]
    }
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