<template>
  <div class="min-vh-100">
    <!-- Start Filters -->
    <section class="filters-block shadow-sm">
      <div class="container">
        <b-form class="d-md-flex flex-column flex-md-row  align-items-md-center justify-content-md-between"
                @submit.prevent="search">
          <b-form-select
            @change="search "
            id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-2 mb-sm-0 w-25"
            v-model="filters.orderBy"
            :options="[{ text: 'Latest First', value: 'latest' },{ text: 'Most Liked First', value: 'likes' },]"
          ></b-form-select>

          <div class="d-flex w-50 ml-3">
            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0" value="1" v-model="filters.has_comments">Has Comments
            </b-form-checkbox>
            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0" value="1" v-model="filters.has_team">By Team
            </b-form-checkbox>
          </div>
          <div class="d-flex align-items-center">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="filters.q"></b-form-input>
            <b-button variant="primary" class="shadow rounded" type="submit">
              Search
            </b-button>
          </div>

        </b-form>
      </div>
    </section>
    <!-- End Filters -->
    <section class="cards-block mb-5 mt-5 px-2">
      <div class="container">
        <div class="design-grid" v-if="designs.length && !loading || !empty">
          <base-design v-for="design in designs" :key="design.id" :design="design" :loading="loading">
          </base-design>
        </div>
        <div class="d-flex align-items-center justify-content-center w-100" v-else>
          <b-alert show class="w-100">No Search Results</b-alert>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      loading: false,
      empty:false,
      designs: [],
      searching: false,
      filters: {
        has_team: 0,
        has_comments: 0,
        q: '',
        orderBy: 'likes'
      }
    }
  },
  computed: {
    queryString() {
      return Object.keys(this.filters)
        .map(k => `${k}=${this.filters[k]}`).join('&');
    }
  },
  methods: {
    search() {
      this.loading = true
      this.$axios.get(`/search/designs?${this.queryString}`)
        .then(res => {
          this.designs = res.data.data
        }).catch(err => {
        console.log(err)
      }).finally(() => {
        setTimeout(() => {
          this.loading = false
        }, 2000)
        if(this.designs.length === 0){
          this.empty = true
        }else{
          this.empty = false
        }
      })
    }
  },
  beforeMount() {
    this.search()
  }
}
</script>

<style scoped lang="scss">
.design-grid{
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
