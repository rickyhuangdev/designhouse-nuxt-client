<template>
  <section class="resend-email py-5">
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
                  <label for="email" class="mb-2 font-10">Email address</label>
                  <input type="email" class="form-control" id="email"
                         autocomplete="off"
                         v-model.trim="form.email"
                         readonly
                         :class="{'is-invalid':form.errors.has('email')}"
                         aria-describedby="email">
                  <HasError :form="form" field="email"/>
                </div>
                <div class="form-group">
                  <label for="email" class="mb-2 font-10">Password</label>
                  <input type="password" class="form-control" id="password"
                         autocomplete="off"
                         v-model.trim="form.password"
                         :class="{'is-invalid':form.errors.has('password')}"
                         aria-describedby="password">
                  <HasError :form="form" field="password"/>
                </div>
                <div class="form-group">
                  <label for="password_confirmation" class="mb-2 font-10">Confirm Password</label>
                  <input type="password" class="form-control" id="password_confirmation"
                         autocomplete="off"
                         v-model.trim="form.password_confirmation"
                         aria-describedby="password_confirmation">
                </div>
                <button type="submit" class="btn btn-primary float-right" :disabled="form.busy">Reset Password
                  <span v-if="form.busy">
                <i class="fa-solid fa-spinner fa-spin"></i>
            </span>
                </button>
                <base-button>summit</base-button>
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
