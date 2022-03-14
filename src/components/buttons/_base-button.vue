<template>
  <button class="btn" :class="{[`btn ${type}`]:true,['btn-block']:block,[`${size}`]:true,[`float-right`]:position}"
          :type="nativeType"
          :disabled="loading"
  >
    <slot/>
    <span v-if="loading">
      <i class="fa-solid fa-spinner fa-spin"></i>
    </span>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'btn-primary'
    },
    nativeType: {
      type: String,
      default: 'submit'
    },
    loading: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'px-4 py-2'
    },
    position:{
      type:Boolean,
      default:false

    }
  }
}
</script>
<style lang="scss" module>
</style>
