<template>
  <section class="post-details mt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <!-- Single Image -->
          <div class="post-detail">
            <div class="single-img">
              <img
                :src="design.images.large" class="img-fluid rounded shadow-sm"
                :alt="design.title"
              />
            </div>
          </div>
          <!-- End Single Image -->
          <!-- Design Detail Text -->
          <div
            class="desing-text font-16 fw-400 pb-3 pt-2"
          >
            <p>
              {{ design.description }}
            </p>
          </div>
          <!-- End Design Detail Text -->
          <!-- Design Comments -->
          <div class="design-comments mt-3">
            <h1 class="font-16 fw-300 mb-4">
              <strong class="fw-500">{{ comments.length }} comments</strong>
            </h1>
            <ul class="comment-list">
              <base-comment v-for="comment in comments" :key="comment.id" :comment="comment" @deleted="handleDelete"/>
            </ul>
          </div>
          <template v-if="$auth.loggedIn">
            <form @submit="saveComment" class="mt-5">
              <div class="form-group">
                <label class="mb-2 font-13">Add a Comment</label>
                <textarea v-model="form.body"
                          class="form-control"
                          placeholder="Enter a comment"
                          :class="{'is-invalid':form.errors.has('body')}"
                ></textarea>
                <HasError :form="form" field="body"/>
              </div>
              <div class="w-100">
                <base-button :loading="form.busy" :position="true">Post a Comment</base-button>
              </div>
            </form>
          </template>

          <!--/ END COMMENTS-->
        </div>
        <div class="col-md-4 mt-3 mt-sm-0">
          <div class="post-detail-sidebar">
            <!-- Designer info -->
            <div
              class="modal-user-meta white-bg-color"
            >
              <a
                class="float-left"
                href="#"
                title="Neba"
              >
                <img
                  :src="design.user.photo_url"
                  :alt="design.user.name"
                />
              </a>
              <div class="modal-user-detail">
                <h1 class="font-13 fw-500">
                  <a href="#">
                    {{ design.user.name }}
                  </a>
                </h1>
                <p class="font-12 fw-300 mt-1">
                  <span class="shot-by">{{ design.user.tagline }}</span>
                </p>
                <p class="font-12 fw-300  mt-1">
                  {{ design.user.create_dates.created_at_human }}
                </p>
              </div>
            </div>
            <!-- End Designer info -->
            <!-- Designer Design Info -->
            <ul
              class="details-side-meta font-14 fw-400"
            >

              <li class="d-table w-100 d-flex align-items-center">
                <div class="stats-txt d-table-cell w-50">
                  <a href="#" class="d-flex align-items-center">
                 <span class="mr-2">
               <i class="fa fa-heart"></i>
               </span>
                    Like
                  </a>
                </div>
                <div class="stats-num d-table-cell w-50 text-right">
                  <a href="#">{{design.likes_count}} Likes</a>
                </div>
              </li>

              <li class="d-table w-100">
                <div
                  class="stats-txt d-table-cell w-100"
                >
                  <a href="#">
                    More from {{design.user.name}}
                  </a>
                </div>
              </li>

            </ul>
            <!-- End Designer Design Info -->
            <!-- Designer More Designs -->
            <div class="more-designs-outer pb-3" v-if="design.related_designs.length>0">
              <ul class="more-designs row">
                <li class="col-6" v-for="design in design.related_designs" :key="design.id">
                  <nuxt-link :to="`/design/${design.slug}`">
                    <img
                      class="w-100"
                      :src="design.handle_image.thumbnail"
                      :alt="design.title"
                    />
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <!-- End Designer More Designs -->
            <!-- Designs Tags -->
            <div class="designs-tag-outer mt-3">
              <h2 class="font-16 fw-500 mb-2">
                Tags
              </h2>
              <div
                class="designs-tag font-14 fw-300"
              >
                <b-badge variant="info" v-for="(tag,index) in design.tag_list.tags" :key="index">{{tag}}</b-badge>
<!--                <a href="#" title="3D" v-for="(tag,index) in design.tag_list.tags" :key="index">{{tag}}</a>-->
              </div>
            </div>
            <!-- End Designs Tags -->
          </div>
        </div>
        <!--/ END RIGHT-->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "show",
  data() {
    return {
      form: this.$vform({
        body: ''
      })
    }
  },
  async asyncData({$axios, params, error}) {
    try {
      const {data: {data: design}} = await $axios.get(`/designs/slug/${params.slug}`)
      return {design, comments: design.comments}
    } catch (e) {
      if (e.response.status === 404) {
        error({statusCode: 404, message: 'Design not found'})
      } else {
        error({statusCode: 500, message: 'Internal Server Error'})
      }
    }
  },
  methods: {
    handleDelete(id) {
      this.comments = this.comments.filter(k => k.id !== id)
    },
    saveComment() {
      this.form.post(`/designs/${this.design.id}/comments`)
        .then(res => {
          this.form.reset()
          this.comments = [...this.comments, res.data.data]
        }).catch(e => {
        console.log(e)
      })

    }
  }
}
</script>

<style scoped>

</style>
