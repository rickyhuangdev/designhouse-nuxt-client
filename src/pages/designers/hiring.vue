<template>
  <section class="hiring-section mb-5">
    <div class="container-fluid p-5 banner_section">
      <div class="row">
        <div class="col-md-5 d-flex justify-content-center">
          <img src="~/assets/images/hiring_banner.svg" alt="banner" class="img-fluid banner d-block">
        </div>
        <div class="col-md-7 d-flex flex-column justify-content-center align-items-start mt-4 mt-md-0">
          <h1 class="hire-title text-center">Designers for Hire</h1>
          <p class="text-md-center mt-4 hire-desc text-left">Find the world’s best designers on DesignHouse – the largest independent community for digital designers.</p>
        </div>
      </div>
    </div>
    <div class="container-fluid px-4">
      <div class="row">
        <div class="col-md-3">
          <form @submit.prevent="fetchDesigners">
            <div class="card mb-4 search-section">
              <div class="card-body">
                <div class="form-group mb-3">
                  <label for="exampleInputEmail1" class="mb-3">Keyword Search</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" v-model="filters.keywords">
                </div>
                <div class="form-group mb-3">
                  <label for="Specialties" class="mb-3">Specialties</label>
                  <select class="form-control" id="Specialties" v-model="filters.specialty">
                    <option value="null">Choose a Specialty</option>
                    <option value="1">Animation</option>
                    <option value="2">Brand / Graphic Design</option>
                    <option value="3">Illustration</option>
                    <option value="4">Leadership</option>
                    <option value="5">Mobile Design</option>
                    <option value="6">UI / Visual Design</option>
                    <option value="7">UX Design / Research</option>
                    <option value="8">Product Design</option>
                    <option value="9">Web Design</option>
                  </select>
                </div>
              </div>
              <div class="form-group mb-3 p-3">
                <base-gmap @address-response="handleAddress"></base-gmap>
              </div>
              <div class="form-group mb-1 p-3 d-flex flex-column justify-content-between">
                <label for="Specialties" class="mb-3">Unit</label>
                <b-form-checkbox class="mb-2" value="km" v-model="filters.unit">Km
                </b-form-checkbox>
                <b-form-checkbox class="mb-2" value="m" v-model="filters.unit">M
                </b-form-checkbox>
              </div>
              <div class="form-group mb-1 p-3 d-flex flex-column">
                <label class="mb-3">Distance</label>
                <b-form-checkbox class="mb-2" value="5" v-model="filters.distance"><=5 Km
                </b-form-checkbox>
                <b-form-checkbox class="mb-2" value="6" v-model="filters.distance">>5 Km
                </b-form-checkbox>
              </div>
              <div class="form-group mb-1 p-3 d-flex justify-content-between">
                <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0" value="1" v-model="filters.available_to_hire">Available to
                  Hire
                </b-form-checkbox>
              </div>
              <div class="form-group mb-3 p-3 d-flex justify-content-between">
                <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0" value="1" v-model="filters.has_designs">Has Designs
                </b-form-checkbox>
              </div>
              <div class="form-group p-3">
                <button class="py-2 px-4 text-white bg-info btn float-right rounded shadow" type="submit">Search
                </button>
              </div>
            </div>

          </form>
        </div>
        <div class="col-md-9">
          <div class="d-flex align-items-center justify-content-center w-100 h-100" v-if="loading">
            <b-spinner label="Loading..." style="width: 150px; height: 150px"></b-spinner>
          </div>
          <div class="designer-list pt-3">
              <div class="card border-bottom mb-2 shadow-none" v-for="designer in designers" :key="designer.id">
                <div class="card-body">
                  <div class="card-title d-flex align-items-center">
                    <img :src="designer.photo_url" :alt="designer.name" class="img-fluid designer-image d-block">
                   <div class="h-100 ml-2">
                     <span class="d-block pb-2 designer-name">{{ designer.name }}</span>
                     <b-badge variant="primary" class="mb-1">{{ designer.specialty.name }}</b-badge>
                     <span class="d-block p-1 resume-card-location">{{ designer.formatted_address }}</span>
                   </div>
                  </div>
                  <h6 class="card-subtitle mb-2 text-muted">{{ designer.tagline }}</h6>
                  <div class="row" v-if="designer.live_designs.length">
                    <div class="col">
                      <vueper-slides
                        class="no-shadow"
                        :visible-slides="4"
                        slide-multiple
                        :gap="2"
                        :arrows="false"
                        :bullets="false"
                        :slide-ratio="0.25"
                        :dragging-distance="50"
                        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
                        <vueper-slide v-for="item in designer.live_designs"
                                      :key="item.id"
                                      :link="'design/'+item.slug"
                                      :image="item.handle_image.thumbnail">
                        </vueper-slide>
                      </vueper-slides>
                    </div>
                  </div>
                  <h5 class="mt-3 d-block"><a :href="`/designer/${designer.username}`">View more details</a></h5>

                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import background_banner from '~/assets/images/hiring_banner.svg';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  name: "hiring",
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      designers: [],
      loading: false,
      image: background_banner,
      filters: {
        available_to_hire: 0,
        has_designs: 0,
        q: '',
        latitude: '',
        longitude: '',
        distance: '',
        orderBy: 'latest',
        keywords: '',
        unit:'',
        specialty:''

      }
    }
  },
  created() {
    this.fetchDesigners()
  },
  computed: {
    queryString() {
      return Object.keys(this.filters)
        .map(k => `${k}=${this.filters[k]}`).join('&');
    }
  },
  methods: {
    handleAddress(data) {
      this.filters.longitude = data.longitude
      this.filters.latitude = data.latitude
      console.log(this.filters.latitude)
    },
    fetchDesigners() {
      this.loading = true
      this.$axios.get(`/search/designers?${this.queryString}`)
        .then(res => {
          this.designers = res.data.data
        }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.loading = false
      })
    }
  },

}
</script>

<style scoped lang="scss">
.vueperslide{
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.banner_section{
  margin-bottom: 20px;
 background: #E9ECFF;
  p{
    font-size: 16px;
  }
}
.banner{
  width: 350px;
}
.hire-title{
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  @media (min-width: 500px){
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
  }
}

.hire-desc {
  width: 95%;
  margin-top: 8px;
  color: #6e6d7a;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.designer-image {
  width: 65px;
  border-radius: 50%;
}

.designer-list {
  //display: grid;
  //grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  //@media screen and (max-width: 575px) {
  //  grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
  //}
  //@media screen and (max-width: 767px) {
  //  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  //}
  gap: 15px;

  .card {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    border: none;

    span {
      font-size: 13px;
    }
  }
}
.search-section{
  border: none;

}
.designer-name{
  font-size: 18px!important;
  font-weight: 500;
  text-transform: capitalize;
}
.resume-card-location{
  font-weight: 400;
  line-height: 28px;
  color: #6e6d7a;
  text-transform: capitalize;
}
</style>
