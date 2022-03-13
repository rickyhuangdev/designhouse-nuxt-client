<template>
  <div>
    <Nav/>
    <div class="wrapper">
      <Nuxt/>
    </div>
    <Footer/>
  </div>

</template>

<script>
import Nav from "~/layouts/partials/nav";
import Footer from "~/layouts/partials/footer";

export default {
  name: "default",
  components: {
    Nav,
    Footer,
  }
}
</script>

<style scoped>

</style>
