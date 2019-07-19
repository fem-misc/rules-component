<template>
  <div class="built-in-validate">
    <el-input :value="value" @input="onInput" @blur="validate"></el-input>
    <!-- <button type="button" @click="validate">组件内部的触发验证的按钮</button> -->
  </div>
</template>

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
