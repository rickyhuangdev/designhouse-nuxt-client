<template>
  <button :class="styles">
    <slot/>
  </button>
</template>
<script>
export default {
  props: {
    styles: {
      type: String,
      required: true,
      default: 'btn btn-primary'
    }
  }
}
</script>
<style lang="scss" module>
</style>
