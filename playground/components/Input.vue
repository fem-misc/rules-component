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
