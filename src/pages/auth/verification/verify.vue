<template>
  <section class="resend-email py-5">
    <div class="container">
      <div class="row  align-items-center justify-content-center">
        <div class="col flex-grow-0">
          <div class="card shadow-sm" style="width: 30rem;">
            <div class="card-body">
              <h5 class="card-title mb-4 text-center">Email Verification</h5>
              <div class="">
                <b-alert variant="success" class="flex-grow-1" :show="success">{{ status }}</b-alert>
                <b-alert variant="danger" class="flex-grow-1" :show="!success">{{ status }}</b-alert>
              </div>
              <nuxt-link :to="{name:'login'}">Proceed to Login</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({params, query, app}) {

    const q = Object.keys(query).map(k => `${k}=${query[k]}`).join('&')
    try {
      const {data} = await app.$axios.post(`/verification/verify?${q}`)
      console.log(data)
      return {success: true, status: data.message}
    } catch (e) {
      return {success: false, status: e.response.data.errors.message}
    }
  }
}
</script>

<style scoped>

</style>
