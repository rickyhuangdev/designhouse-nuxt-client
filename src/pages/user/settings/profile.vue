<template>
  <div class="border-0">
    <h3 class="mb-3 fw-700">Profile</h3>
    <div class="row">
      <div class="col d-flex justify-content-center">
        <form @submit.prevent="submit" class="w-100">
          <alert-success :form="form">
            Profile Successfully Updated
          </alert-success>
          <div class="form-group">
            <label class="mb-2 font-10">Full Name</label>
            <base-input v-model="form.name" :form="form" field="name"></base-input>
          </div>
          <div class="form-group">
            <label class="mb-2 font-10">Email</label>
            <base-input v-model="form.email" :form="form" field="email" type="email"></base-input>
          </div>
          <div class="form-group">
            <label class="mb-2 font-10">Tagline</label>
            <base-input v-model="form.tagline" :form="form" field="tagline"></base-input>
          </div>
          <div class="form-group">
            <label class="mb-2 font-10">Address</label>
            <base-input v-model="form.address" :form="form" field="address"></base-input>
          </div>
          <div class="form-group">
            <label class="mb-2 font-10">Location</label>
            <base-gmap @address-response="handleAddress" :initialValue="form.formatted_address"></base-gmap>
          </div>
          <div class="form-group">
            <label class="mb-2 font-10">About Me</label>
            <textarea v-model="form.about"
                      class="form-control"
                      :class="{'is-invalid':form.errors.has('about')}"
            ></textarea>
            <HasError :form="form" field="about"/>
          </div>


          <div class="form-group">
            <label class="mb-2 font-10 d-flex align-items-center">
              <input v-model="form.available_to_hire" type="checkbox" class="mr-2" value="true"/>
              Available to hire
            </label>
          </div>
          <div class="w-100">
            <base-button :loading="form.busy" :position="true">Save Changes</base-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      form: this.$vform({
        tagline: '',
        name: '',
        email: '',
        about: '',
        formatted_address: '',
        location: {
          aa: '123',
          bb: '233'
        },
        available_to_hire: false
      })

    }
  },
  methods: {
    submit() {
      this.form.put(`/settings/profile`).then(re => {
        // setTimeout(() => {
        //   this.$router.push({name: 'settings.designs'})
        // }, 1000)
      }).catch(err => {
        console.log(err)
      })
    },
    callbackMethod() {

    },
    handleAddress(data) {
      this.form.formatted_address = data.formatted_address
      this.form.location.longitude = data.longitude
      this.form.location.latitude = data.latitude
    }
  },
  mounted() {
    Object.keys(this.form).forEach(k => {
      if (this.$auth.user.hasOwnProperty(k)) {
        this.form[k] = this.$auth.user[k]
      }
    })
    if (this.$auth.user.location) {
      this.form.location = {
        longitude: this.$auth.user.location.coordinates[0],
        latitude: this.$auth.user.location.coordinates[1]
      }
    } else {
      this.form.location = {}
    }

  }
}
</script>

<style scoped>
label {
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px !important;
  font-weight: 500;
  line-height: 22px;
  display: block;
  margin-bottom: 10px;
  color: #0d0c22;
}
</style>
