<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22 text-dark">
        Register
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success :form="form">We have sent you an email to activate your account</alert-success>
        <div class="form-group">
          <label class="mb-2 font-10">Full Name</label>
          <base-input v-model="form.name" :form="form" field="name"></base-input>
        </div>
        <div class="form-group">
          <label class="mb-2 font-10">Username</label>
          <base-input v-model="form.username" :form="form" field="username"></base-input>
        </div>
        <div class="form-group">
          <label class="mb-2 font-10">Email address</label>
          <base-input v-model="form.email" :form="form" field="email"></base-input>
        </div>
        <div class="form-group">
          <label class="mb-2 font-10">Password</label>
          <base-input v-model="form.password" :form="form" field="password"></base-input>
        </div>
        <div class="form-group">
          <label class="mb-2 font-10">Confirm Password</label>
          <base-input v-model="form.password_confirmation" :form="form" field="password_confirmation"></base-input>
        </div>

        <div class="text-right">
          <base-button :loading="form.busy">Register</base-button>
        </div>
        <div class="font-14 fw-400 text-center mt-4 text-dark d-flex align-items-center justify-content-between">
          <p class="p-0 m-0 d-block">Already have an account ?</p>
          <nuxt-link to="/login" class="nav-link ml-3 d-block"> Login
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right"
                 viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </nuxt-link>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "register",
  middleware:['guest'],
  data() {
    return {
      form: this.$vform({
        username: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      })
    }
  },
  methods: {
    submit() {
      console.log(this.form.busy)
      this.form.post('/register').then(res => {
        this.form.reset()
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
