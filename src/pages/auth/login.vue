<template>
  <section class="container py-5 d-flex justify-content-center align-items-center">
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
          <input
            type="text"
            name="email"
            class="form-control form-control font-14 fw-300"
            placeholder="Email"
            autocomplete="off"
            v-model.trim="form.email"
            :class="{'is-invalid':form.errors.has('email')}"
          />
          <HasError :form="form" field="email"/>
        </div>
        <div class="form-group">
          <input
            type="password"
            name="password"
            class="form-control form-control font-14 fw-300"
            placeholder="Password"
            autocomplete="off"
            v-model.trim="form.password"
            :class="{'is-invalid':form.errors.has('password')}"
          />
          <HasError :form="form" field="password"/>
        </div>
        <div class="mt-4 mb-4 clearfix">
          <nuxt-link to="/password/email" class="forgot-pass color-blue font-14 fw-400" href="#"> Forgot password ? </nuxt-link>
        </div>
        <div class="text-right">
          <button type="submit" class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase shadow">
            Login
          </button>
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
