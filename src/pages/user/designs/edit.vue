<template>
  <div class="p-4 container">
    <div class="grid sm:grid-cols-1 gap-4 md:grid-cols-2">
      <div class="mb-4">
        <img
          class="w-full shadow-xl rounded h-auto"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        >
      </div>
      <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-md">
        <form class="px-2">
          <div class="mb-4">
            <label for="title" class="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input id="title" type="text"
                   class="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea id="description" rows="4"
                      class="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div class="mb-4">
            <label for="team" class="block text-gray-700 text-sm font-bold mb-2">
              Select a Team
            </label>
            <select id="team"
                    class="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
              <option :value="null">Select a team</option>
              <option :value="team.id" v-for="team in teams" :key="team.id">{{team.name}}</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-700 text-sm font-bold mb-2">
              Tags
            </label>
            <textarea id="tag" rows="4"
                      class="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div class="md:flex md:items-center mb-4 justify-start">
            <label class="md:w-2/3 block text-gray-500 font-bold flex items-center">
              <input class="mr-2 leading-tight" type="checkbox">
              <span class="text-sm">
           Assign to team
           </span>
            </label>
          </div>
          <div class="md:flex md:items-center mb-4 justify-start">
            <label class="md:w-2/3 block text-gray-500 font-bold flex items-center">
              <input class="mr-2 leading-tight" type="checkbox">
              <span class="text-sm">
           Publish this design
           </span>
            </label>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "edit",
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

    }
  },
  async asyncData({$axios, params, error, redirect}) {
    try {
      const {data:{data:design}} = await $axios.get(`/designs/${params.id}`)
      const {data:{data:teams}} = await $axios.get(`/users/teams`)
      console.log(design)
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
      if (this.design.team) {
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
