<template>
  <section class="container-fluid py-5 d-flex justify-content-center align-items-center">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Login
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-error :form="form" v-if="form.errors.has('message')">
          {{form.errors.get('message')}}
          <nuxt-link :to="{name:'verification.resend'}">
            Resend verify email
          </nuxt-link>
        </alert-error>
        <div class="form-group">
          <base-input v-model="form.email" :form="form" field="email"></base-input>
        </div>
        <div class="form-group">
          <base-input v-model="form.password" :form="form" field="password" inputType="password"></base-input>
        </div>
        <div class="mt-4 mb-4 clearfix">
          <nuxt-link to="/password/email" class="forgot-pass color-blue font-14 fw-400" href="#"> Forgot password ? </nuxt-link>
        </div>
        <div class="text-right">
          <base-button :loading="form.busy">Login</base-button>
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          Don't have an account yet?
          <nuxt-link to="/register" class="color-blue"> Create an account</nuxt-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "login",
  middleware:['guest'],
  data() {
    return {
      form: this.$vform({
        'email': '',
        'password': ''
      })
    }
  },
  methods: {
    submit() {
      this.$auth.loginWith('local', {data: this.form}).then(res => {
        this.form.reset();
      }).catch(err => {
        this.form.errors.set(err.response.data.errors)
      })


    }
  }
}
</script>

<style scoped>

</style>
