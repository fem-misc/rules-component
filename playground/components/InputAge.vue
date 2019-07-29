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
