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
                  {{ status }}
                </alert-success>
                <div class="form-group">
                  <label class="mb-2 font-10">Email address</label>
                  <base-input v-model="form.email" :form="form" field="email"></base-input>

                </div>
                <base-button :loading="form.busy" :position="true">Submit</base-button>

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
  name: "reset-password",
  middleware:['guest'],
  data() {
    return {
      status: '',
      form: this.$vform({
        'email': '',
      })
    }
  },
  methods: {
    submit() {
      this.form.post('/password/email').then(res => {
        this.status = res.data.status
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
