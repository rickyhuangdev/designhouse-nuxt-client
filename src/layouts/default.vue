<template>
  <div>
    <APP_Nav/>
     <div class="main">
       <Nuxt/>
     </div>
    <APP_Footer/>
  </div>

</template>

<script>
import APP_Nav from "./partials/nav";
import APP_Footer from "./partials/footer";

export default {
  name: "default",
  components: {
    APP_Nav,
    APP_Footer,
  }
}
</script>

<style scoped>
.main{
  min-height: 85vh;
}
</style>
