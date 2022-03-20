<template>
  <div class="border-0">
    <h3 class="mb-3 fw-700">Profile</h3>
    <div class="row">
      <div class="col d-flex align-items-center">
        <!--          <label class="mb-2 font-10">Upload Image</label>-->
        <img :src="$auth.user.photo_url" :alt="$auth.user.name" class="rounded-circle"
             style="width: 75px;height: 75px;">
        <form class="ml-2" @submit.prevent="uploadImage" enctype="multipart/form-data">
          <div class="py-2">
            <input type="file" name="image" @change="handleImageUpload" accept="image/*">
          </div>
          <button class="btn btn-primary btn-sm shadow rounded" :disabled="uploadImageLoading"> Upload Image</button>
          <span class="text-danger d-block mt-1" v-if="imageError">{{ imageError }}</span>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col d-flex justify-content-center">
        <form @submit.prevent="submit" class="w-100" enctype="multipart/form-data">
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
      image: '',
      imageError: '',
      uploadImageLoading: false,
      form: this.$vform({
        tagline: '',
        name: '',
        email: '',
        about: '',
        formatted_address: '',
        location: {},
        available_to_hire: false,
      }),
      imageForm: this.$vform({
        image: ''
      })
    }
  },
  methods: {
    submit() {
      this.form.put(`/settings/profile`).then(re => {
        this.$auth.fetchUser()
        setTimeout(() => {
          this.$router.push({name: 'settings.designs'})
        }, 1000)
      }).catch(err => {
        console.log(err)
      })
    },
    handleImageUpload(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.image = files[0];
    },
    uploadImage(e) {
      this.uploadImageLoading = true
      e.preventDefault()
      let data = new FormData();
      data.append('image', this.image);
      this.$axios.post('/user/image', data).then(re => {
        this.$toasted.success('Upload Successfully').goAway(1500)
        this.imageError = ''
        setTimeout(() => {
          this.$auth.fetchUser()
        }, 3500)
      }).catch(err => {

        if (err.response.status === 422 && err.response.data.errors.image) {
          this.imageError = err.response.data.errors.image[0]
        }
      }).finally(() => {
        this.uploadImageLoading = false
      })

    },
    callbackMethod() {

    },
    handleAddress(data) {
      this.form.formatted_address = data.formatted_address
      this.form.location.longitude = data.longitude
      this.form.location.latitude = data.latitude
    },
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
