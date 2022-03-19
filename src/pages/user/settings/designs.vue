<template>
<div class="card border-0 p-4 shadow-sm">
  <h3 class="mb-3 fw-700">Designs</h3>
<!--  <table class="table responsive design_table">-->
<!--    <thead class="thead-dark">-->
<!--    <tr>-->
<!--      <th scope="col">#</th>-->
<!--      <th scope="col" class="d-none d-sm-flex" style="height: 100%">Title</th>-->
<!--      <th scope="col">Status</th>-->
<!--      <th scope="col">Action</th>-->
<!--    </tr>-->
<!--    </thead>-->
<!--    <tbody>-->
<!--    <tr v-for="design in designs" :key="design.id" class="align-middle">-->
<!--      <td>-->
<!--        <img :src="design.images.thumbnail" :alt="design.title" class="img-fluid design-image shadow-sm">-->
<!--      </td>-->
<!--      <td class="d-none d-sm-flex">{{design.title}}</td>-->
<!--      <td class="align-middle"> <b-badge :variant="design.is_live?'success':'danger'">{{design.is_live?'Publish':'Draft'}}</b-badge></td>-->
<!--      <td class="align-middle">-->
<!--        <nuxt-link :to="{name:'designs.edit',params:{id:design.id}}" class="text-dark"><i class="fas fa-edit"></i></nuxt-link>-->
<!--      </td>-->
<!--    </tr>-->
<!--    </tbody>-->
<!--  </table>-->
  <b-table
    id="my-table"
    :items="designs"
    :per-page="perPage"
    :current-page="currentPage"
    small
    :fields="fields"
  >
    <template #cell(images.thumbnail)="data">
      <img :src="data.item.images.thumbnail" :alt="data.item.title" class="img-fluid design-image shadow-sm">
    </template>

    <template #cell(is_live)="data">
      <b-badge :variant="data.item.is_live?'success':'danger'">{{ data.item.is_live ? 'Publish' : 'Draft' }}</b-badge>
    </template>
    <template #cell(Action)="data">
      <nuxt-link :to="{name:'designs.edit',params:{id:data.item.id}}" class="text-dark"><i class="fas fa-edit"></i>
      </nuxt-link>
    </template>

  </b-table>
 <div class="d-flex justify-content-end">
   <b-pagination
     v-model="currentPage"
     :total-rows="rows"
     :per-page="perPage"
     aria-controls="my-table"
   ></b-pagination>
 </div>
</div>
</template>

<script>
export default {
  name: "designs",
  middleware:['auth'],
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      designs: [],
      fields: [
        // A virtual column that doesn't exist in items
        {key: 'images.thumbnail', label: 'Image'},
        // A column that needs custom formatting

        {key: 'title', label: 'Title'},
        {key: 'is_live', label: 'Status'},
        // A virtual column made up from two fields
        'Action'
      ],
    }
  },
  methods: {
    async fetchUserDesigns() {
      const {data: res} = await this.$axios.get(`/users/${this.$auth.user.id}/designs`)
      this.designs = res.data
      console.log(this.designs)
    }

  },
  mounted() {
    this.fetchUserDesigns()
  },
  computed: {
    rows() {
      return this.designs.length
    }
  }
}
</script>

<style>
.design-image{
  display: block;
  width: 85px;
}
.design_table thead th {
  border:none;
}
#my-table tbody tr td {
  vertical-align: middle;
}
</style>
