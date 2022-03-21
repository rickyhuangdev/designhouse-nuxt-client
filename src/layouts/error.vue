<template>
<div class="py-5 mt-5">
  <div class="container mx-auto py-5 mx-3">
    <div class="p-4 bg-white shadow-md rounded not-found" style="height:400px">
      <div class="mb-4">{{error.message}}</div>
    <div class="">
      <nuxt-link to="/" class="text-white btn btn-sm btn-primary">Back to home Page</nuxt-link>
    </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "error-404",
  props: ['error']
}
</script>

<style scoped>
.not-found{
  background: url("~/assets/images/404.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
