<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22 text-dark">
        Register
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <div class="form-group">
          <input
            type="text"
            name="name"
            v-model.trim="form.name"
            class="form-control form-control font-14 fw-300"
            autocomplete="off"
            placeholder="Full Name"
            :class="{'is-invalid':form.errors.has('name')}"
          />
          <HasError :form="form" field="name" />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="username"
            v-model.trim="form.username"
            class="form-control form-control font-14 fw-300"
            autocomplete="off"
            placeholder="Username"
            :class="{'is-invalid':form.errors.has('username')}"
          />
          <HasError :form="form" field="username" />
        </div>
        <div class="form-group">
          <input
            type="email"
            name="email"
            v-model.trim="form.email"
            class="form-control form-control font-14 fw-300"
            autocomplete="off"
            placeholder="Email"
            :class="{'is-invalid':form.errors.has('email')}"
          />
          <HasError :form="form" field="email" />
        </div>
        <div class="form-group">
          <input
            type="password"
            name="password"
            v-model.trim="form.password"
            class="form-control form-control font-14 fw-300"
            autocomplete="off"
            placeholder="Password"
            :class="{'is-invalid':form.errors.has('password')}"
          />
          <HasError :form="form" field="password" />
        </div>
        <div class="form-group">
          <input
            type="password"
            v-model.trim="form.password_confirmation"
            name="password_confirmation"
            class="form-control form-control font-14 fw-300"
            autocomplete="off"
            placeholder="Confirm Password"
            :class="{'is-invalid':form.errors.has('password_confirmation')}"
          />
          <HasError :form="form" field="password_confirmation" />
        </div>

        <div class="text-right">
          <button type="submit" class="btn btn-info font-16 fw-500 text-uppercase shadow" :disabled="form.busy">
            Register
          </button>
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
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
