<template>
<div class="card border-0 p-4 shadow-sm">
  <h3 class="mb-3 fw-700">Designs</h3>
  <table class="table responsive design_table">
    <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col" class="d-none d-sm-flex" style="height: 100%">Title</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="design in designs" :key="design.id" class="align-middle">
      <td>
        <img :src="design.images.thumbnail" :alt="design.title" class="img-fluid design-image shadow-sm">
      </td>
      <td class="d-none d-sm-flex">{{design.title}}</td>
      <td class="align-middle"> <b-badge :variant="design.is_live?'success':'danger'">{{design.is_live?'Publish':'Draft'}}</b-badge></td>
      <td class="align-middle">
        <nuxt-link :to="{name:'designs.edit',params:{id:design.id}}" class="text-dark"><i class="fas fa-edit"></i></nuxt-link>
      </td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: "designs",
  middleware:['auth'],
  data() {
    return {
      designs: []
    }
  },
  methods:{
    async fetchUserDesigns(){
      const {data:res} = await this.$axios.get(`/users/${this.$auth.user.id}/designs`)
      res.data.forEach((v,k)=>{
          this.designs.push(v)
        })
    }
  },
  mounted() {
    this.fetchUserDesigns()
  }
}
</script>

<style scoped>
.design-image{
  display: block;
  width: 85px;
}
.design_table thead th {
  border:none;
}
</style>
