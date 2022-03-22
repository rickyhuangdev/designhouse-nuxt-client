<template>
  <section class="resend-email py-5 min-vh-100">
    <div class="container">
      <div class="row  align-items-center justify-content-center">
        <div class="col flex-grow-0">
          <div class="card shadow-sm" style="width: 30rem;">
            <div class="card-body">
              <h5 class="card-title mb-4 text-center">Reset Password</h5>
              <form @submit.prevent="submit">
                <alert-error :form="form" v-if="form.errors.has('message')">
                  {{ form.errors.get('message')[1] }}
                </alert-error>
                <alert-success :form="form">
                 {{status}}
                  <p>
                    <nuxt-link to="/login" class="text-dark mt-2 d-block font-14">Proceed to login</nuxt-link>
                  </p>
                </alert-success>
                <div class="form-group">
                  <label class="mb-2 font-10">Email address</label>
                  <base-input v-model="form.email" :form="form" field="email" ></base-input>
                </div>
                <div class="form-group">
                  <label class="mb-2 font-10">Password</label>
                  <base-input v-model="form.password" :form="form" field="password" inputType="password"></base-input>
                </div>
                <div class="form-group">
                  <label class="mb-2 font-10">Confirm Password</label>
                  <base-input v-model="form.password_confirmation" :form="form" field="password" inputType="password"></base-input>
                </div>
                <base-button :loading="form.busy">Reset Password</base-button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "reset-email",
  middleware:['guest'],
  data() {
    return {
      status: '',
      form: this.$vform({
        email: '',
        password: '',
        password_confirmation: '',
        token: ''
      })
    }
  },
  methods: {
    submit() {
      this.form.post('/password/reset').then(res => {
        this.status = res.data.status
        this.form.reset();
      }).catch(err => {
        this.form.errors.set(err.response.data.errors)
      })


    }
  },
  created() {
    this.form.email = this.$route.query.email
    this.form.token = this.$route.params.token
  }
}
</script>

<style scoped>

</style>
