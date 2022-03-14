<template>
<div class="w-full h-fit">
  <div class="container mx-auto py-5 mx-3">
    <div class="p-4 bg-white shadow-md rounded h-96 flex justify-center items-center flex-col">
      <h3 class="md:text-3xl">{{error.message}}</h3>
      <nuxt-link to="/" class="block mt-24 px-5 py-3 bg-violet-500 text-white shadow rounded">Home Page</nuxt-link>
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

</style>
