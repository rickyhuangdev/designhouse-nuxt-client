<template>
  <div class="jumbotron jumbotron-fluid" style="background: #E9ECFF">
    <div class="container-fluid">
      <div class="content px-5">
        <div class="row">
          <div class="col-md-6 text-left d-flex flex-column justify-content-start">
            <h1 class="content-title">
              Discover the world’s top designers & creatives
            </h1>
            <p class="mt-2" style="letter-spacing: 1px">
              DesignHouse is the leading destination to find & showcase creative work and home to the world's best
              design professionals.
            </p>
            <span v-if="!$auth.loggedIn">
            <nuxt-link :to="{name:'register'}" class="bg-dark px-4 py-2 rounded text-light shadow text-decoration-none mt-5">Sign Up</nuxt-link>
            </span>
          </div>
          <div class="col-md-6 mt-4 mt-sm-0">
            <div class="d-flex align-items-center justify-content-center">
              <img src="~/assets/images/mergedevt.webp" alt="" class="img-fluid jumbotron-logo">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-jumbotron"
}
</script>

<style scoped lang="scss">
.content {
  .content-title {
    @media (min-width: 1200px) {
      font-size: 48px;
      font-weight: 700;
      line-height: 56px;
    }
    @media (max-width: 768px) {
      font-size: 32px;
      font-weight: 700;
      line-height: 38px;
    }
  }
  p{
    margin-top: 25px;
    font-size: 16px;
    padding-bottom: 20px;
  }
  .jumbotron-logo{
    width: 450px;
  }
}
</style>
