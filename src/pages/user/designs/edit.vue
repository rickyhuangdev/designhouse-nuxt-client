<template>
  <section class="container py-5 d-flex justify-content-center align-items-center">
    <div class="row">
      <div class="col-md-6" v-if="design.images">
          <img class="img-fluid rounded shadow"
            :src="design.images.large"
            alt="Sunset in the mountains"/>
      </div>
      <div class="col-md-6 mt-4 mt-sm-0">
        <div class="card shadow-sm">
          <div class="card-body p-4">
            <form @submit.prevent="submit">
              <alert-success :form="form">
                Design Successfully Updated
              </alert-success>
              <div class="form-group">
                <label class="mb-2 font-10">Title</label>
                <base-input v-model="form.title" :form="form" field="title"></base-input>
              </div>
              <div class="form-group">
                <label class="mb-2 font-10">Description</label>
                <textarea v-model="form.description"
                          class="form-control"
                          :class="{'is-invalid':form.errors.has('description')}"
                ></textarea>
                <HasError :form="form" field="description"/>
              </div>
              <div v-if="teams.length">
                <div class="form-group">
                  <label class="mb-2 font-10 d-flex align-items-center">
                    <input v-model="form.assign_to_team" type="checkbox" class="mr-2"/>
                    Assign to Team
                  </label>
                </div>
                <div class="form-group">
                  <label class="mb-2 font-10 d-flex align-items-center">
                    Choose a team
                  </label>
                  <select name="team" id="team" class="form-control"
                          :disabled="!form.assign_to_team"
                          v-model="form.team"
                          :class="{'is-invalid':form.errors.has('team')}"
                  >
                    <option :value="null">Choose a team</option>
                    <option :value="team.id" v-for="team in teams" :key="team.id">{{ team.name }}</option>
                  </select>
                  <has-error field="team" :form="form"></has-error>
                </div>
              </div>
              <div class="form-group">
                <label class="mb-2 font-10 d-flex align-items-center">
                  <input v-model="form.is_live" type="checkbox" class="mr-2" value="true" />
                  Publish
                </label>
              </div>
              <div class="form-group">
                <label class="mb-2 font-10 d-flex align-items-center">
                  Tags
                </label>
                <client-only>
                <better-input-tag :on-change="callbackMethod" :tags="form.tags" on-paste-delimiter=","></better-input-tag>
                </client-only>
              </div>
              <div class="text-right">
                <base-button :loading="form.busy">Update Design</base-button>
              </div>
            </form>
          </div>
        </div>
      </div>


    </div>

  </section>
</template>

<script>
import BetterInputTag from 'better-vue-input-tag'
export default {
  name: "editDesign",
  middleware:['auth'],
  components:{
    BetterInputTag
  },
  data() {
    return {
      form: this.$vform({
        title: '',
        description: '',
        is_live: false,
        tags: [],
        assign_to_team: false,
        team: null
      })

    }
  },
  methods: {
    submit() {
      this.form.put(`/designs/${this.$route.params.id}`).then(re=>{
        console.log(re)
      }).catch(err=>{
        console.log(err)
      })
    },
    callbackMethod(){

    }
  },
  async asyncData({$axios, params, error, redirect}) {
    try {
      const {data:{data:design}} = await $axios.get(`/designs/${params.id}`)
      const {data:{data:teams}} = await $axios.get(`/users/teams`)
      return {design, teams}
    } catch (e) {
      console.log(e.response.data)
      // if (e.response.status === 404) {
      //   error({statusCode: 404, message: 'Design not found'})
      // } else {
      //   error({statusCode: 500, message: 'Internal Server Error'})
      // }
    }
  },
  mounted() {
    if (this.design) {
      Object.keys(this.form).forEach(key => {
        if (this.design.hasOwnProperty(key)) {
          this.form[key] = this.design[key]
        }
      });
       this.form.tags = this.design.tag_list.tags || []
      if (this.design) {
        this.form.team = this.design.team.id
        this.form.assign_to_team = true
      } else {
        this.form.assign_to_team = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>
