<template>
  <div id="custom-page">
    <APP_Nav id="header"/>
    <Nuxt />
    <APP_Footer id="footer"/>
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
/*#footer{*/
/*  position: absolute;*/
/*  bottom: 0;*/
/*  left: 0;*/
/*  width: 100%;*/
/*}*/
#custom-page{
  height: 100vh;
}
</style>
