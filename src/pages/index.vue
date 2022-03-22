<template>
  <div>
      <base-jumbotron></base-jumbotron>
     <div class="container">
       <div class="row">
         <div class="col">
           <h2 class="text-center index-title">You aren’t following anyone yet</h2>
           <h5 class="text-center mt-4 sub-title">Check out some of today’s popular shots</h5>
         </div>
       </div>
     </div>
      <div class="section design-list py-5 container">
        <base-design v-for="design in designs" :key="design.id" :design="design">
        </base-design>
      </div>
      <div>
        <div class="row">
          <div class="col text-center" v-if="isVisible">
            <i class="fa fa-spinner fa-spin"></i> <span class="ml-1"> loading more...</span>
          </div>
        </div>
      </div>
      <div v-observe-visibility="visibilityChanged" v-if="designs.length">
      </div>
    </div>
</template>
<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      page: 1,
      designs: [],
      isVisible: false,
      last_page: 1
    }
  },
  created() {
    this.getDesigns()
  },
  methods: {
    async getDesigns() {
      const designs = await this.$axios.get(`/designs?page=${this.page}`)
      this.designs.push(...designs.data.data)
      this.last_page = designs.data.meta.last_page
    },
    visibilityChanged(isVisible, entry) {
      if (!isVisible) {
        return
      }
      if (this.page >= this.last_page) return;
      this.page++
      this.getDesigns()

    }
  }
  // async asyncData({$axios, params, error, redirect}) {
  //   try {
  //
  //    return{designs}
  //   } catch (e) {
  //     // if (e.response.status === 404) {
  //     //   error({statusCode: 404, message: 'Design not found'})
  //     // } else {
  //     //   error({statusCode: 500, message: 'Internal Server Error'})
  //     // }
  //   }
  // },
}
</script>

<style lang="scss">
.index-title {
  color: #0d0c22;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 32px !important;
  font-weight: 700;
  line-height: 38px;
}

.sub-title {
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}

.design-list {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
