<template>
  <b-skeleton-wrapper :loading="loading" v-if="loading">
    <template #loading>
      <b-card>
        <b-skeleton width="85%"></b-skeleton>
        <b-skeleton width="35%"></b-skeleton>
        <b-skeleton width="65%"></b-skeleton>
        <b-skeleton width="70%"></b-skeleton>
      </b-card>
    </template>
  </b-skeleton-wrapper>
  <div class="design-card rounded" v-else>
    <div class="bg-white rounded-lg overflow-hidden flex-1 flex flex-col">
      <a :href="`/design/${design.slug}`">
        <div class="bg-cover h-48" :style="`background-image: url('${design.images.thumbnail}');`">
          <div class="post-overlay p-4 d-flex flex-column align-items-center justify-content-center">
            <h5 class="fw-500 text-uppercase mb-2">
              {{design.title}}
            </h5>
            <p class="font-12 lh-16">
              {{design.description}}
            </p>
            <div class="card-datetime font-10 fw-300">
              {{design.created_at_dates.created_at_human}}
            </div>
          </div>
        </div>
      </a>
      <div class="p-2 d-flex flex-column mt-2 mx-1">
        <div class="mb-0 text-secondary d-flex justify-content-between align-items-center">
          <a href="#" class=" d-flex text-muted">
            <div>
              <img :src="design.user.photo_url" width="20" class="profile rounded mr-2">
            </div>
            <h3 class="card-title font-13 mt-1 mb-2 fw-400">
              {{design.user.username}}
              <span class="badge badge-pill badge-secondary text-white font-10 pr-1 pl-1 fw-300"
              v-if="design.team"
              >+ team</span>
            </h3>
          </a>
          <div class="mr-1 font-10 flex-2">
            {{design.created_at_dates.created_at_human}}
          </div>
        </div>
        <div class="card-datetime fw-300 d-flex">
          <div class="ml-1 text-right flex-1">
            <ul class="font-12 fw-400 list-inline text-light-gray">

              <li class="pt-0 list-inline-item">
                <i class="fas fa-thumbs-up"></i>
                {{design.likes_count}}
              </li>
              <li class="pt-0 list-inline-item">
                <i class="fas fa-comments"></i>
                {{design.comments_count}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-design",
  props: {
    design: {
      type: Object,
      required: true
    },
    loading:{
      type:Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.design-card{
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
</style>
