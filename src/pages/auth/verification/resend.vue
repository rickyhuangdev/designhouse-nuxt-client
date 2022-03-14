<template>
  <section class="resend-email py-5">
    <div class="container">
      <div class="row  align-items-center justify-content-center">
        <div class="col flex-grow-0">
          <div class="card shadow-sm" style="width: 30rem;">
            <div class="card-body">
              <h5 class="card-title mb-4">Resend Verification Email</h5>
              <form @submit.prevent="submit">
                <alert-error :form="form" v-if="form.errors.has('message')">
                  {{ form.errors.get('message')[1] }}
                </alert-error>
                <alert-success :form="form">
                  We have resent the verification email
                </alert-success>
                <div class="form-group">
                  <label for="email" class="mb-2 font-10">Email address</label>
                  <input type="email" class="form-control" id="email"
                         autocomplete="off"
                         v-model.trim="form.email"
                         :class="{'is-invalid':form.errors.has('email')}"
                         aria-describedby="email">
                  <HasError :form="form" field="email"/>
                </div>
                <button type="submit" class="btn btn-primary float-right" :disabled="form.busy">Submit
                  <span v-if="form.busy">
                <i class="fa-solid fa-spinner fa-spin"></i>
            </span>
                </button>
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
  name: "resend",
  middleware:['guest'],
  data() {
    return {
      form: this.$vform({
        email: ''
      })
    }
  },
  methods: {
    submit() {
      this.form.post('/verification/resend').then(re => {
        this.form.reset()
      }).catch(err => {
        this.form.errors.set(err.response.data.errors)
      })
    }
  }
}
</script>

<style scoped>

</style>
