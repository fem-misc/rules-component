# 触发验证表单

自定义组件内部可以通过使用 el-form-renderer 注入的 $options.extendsForm.{form,content} 来决定什么时候触发一次验证

可以查看自定义组件[高亮的代码](#component)

### Demo

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
          default: '',
          component: BuiltInValidator,
          rules: [
            {
              required: true,
              message: '请输入内容!!'
            }
          ]
        }
      ]
    }
  }
}
</script>
```
:::

### Component

```html {highlight: ['9-10']}
<el-input :value="value" @input="onInput" @blur="validate"></el-input>

<script>
export default {
  props: ['value'],

  methods: {
    validate() {
      const { form, content } = this.$options.extendsForm
      form.validateField(content.id)
    },
    onInput(val) {
      this.$emit('input', val)
    }
  }
}
</script>
```