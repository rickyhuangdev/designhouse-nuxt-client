<template>
  <div class="dashboard_page mb-5">
    <div class="user-account-setting">
      <div class="container p-3">
        <div class="row">
          <div class="col d-flex align-items-center justify-content-center text-center">
            <img :src="user.photo_url" :alt="user.name" class="rounded-circle"
                 style="width: 90px;height: 90px;">
            <div class="d-flex flex-column justify-content-start align-items-start  ml-3">
              <span class="mb-2 font-weight-bold">{{ user.name }}</span>
              <span class="mb-2">{{ user.tagline }}</span>
              <span class="auth-address text-muted">{{ user.formatted_address }}</span>
            </div>
          </div>
        </div>
        <div class="row py-5">
          <!-- LEFT -->
          <div class="col">
            <div class="profile_design_list">
<!--              <b-card v-for="design in user.live_designs"-->
<!--                :title="design.title"-->
<!--                :img-src="design.handle_image.thumbnail"-->
<!--                :img-alt="design.title"-->
<!--                img-top-->
<!--                class="mb-2"-->
<!--              >-->
<!--                <a :href="`/design/${design.slug}`" class="mt-4 d-block ">View Detail</a>-->
<!--              </b-card>-->
              <div class="card-item p-2 shadow-sm rounded" v-for="design in user.live_designs">
                <div class="design-image mb-3">
                  <img :src="design.handle_image.thumbnail" :alt="design.title" class="img-fluid d-block">
                </div>
                <div class="design-content p-2 w-100 font-13">
                  <a :href="`/design/${design.slug}`" class="btn btn-primary btn-sm shadow-sm rounded">View Detail</a>
                </div>
              </div>
            </div>
          </div>
          <!-- END RIGHT -->
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "show",
  data(){
    return{
      userInfo:{}
    }
  },
  created() {
  },
  async asyncData({$axios, params, error}) {
    try {
      const {data: {data: user}} = await $axios.get(`/user/${params.slug}`)
      console.log(user)
      return {user}
    } catch (e) {
      if (e.response.status === 404) {
        error({statusCode: 404, message: 'User not found'})
      } else {
        error({statusCode: 500, message: 'Internal Server Error'})
      }
    }
  },

}
</script>

<style scoped lang="scss">
.profile_design_list{
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(260px,1fr));
  gap: 15px;
 justify-content: center;
  justify-items: center;

}
.card-item{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .design-content{
    align-self: start;
    width: -moz-min-content;
    width: min-content;
    display: table-caption;
    display: -ms-grid;
    -ms-grid-columns: min-content;
  }
}

</style>
