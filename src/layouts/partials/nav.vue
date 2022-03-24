<template>
  <header class="border-bottom shadow-sm">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">DesignHouse</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name:'designs.search'}">Designs</b-nav-item>
          <b-nav-item :to="{name:'designers.list'}">Designers</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
         <nuxt-link to="/upload" class="btn btn-primary btn-sm rounded shadow d-flex justify-content-center align-items-center">Upload Designs</nuxt-link>
          <div v-if="!$auth.loggedIn" class="d-flex font-13 login-item">
            <b-nav-item :to="{name:'register'}">
              Sign Up
            </b-nav-item>
            <b-nav-item :to="{name:'login'}">
              Sign In
            </b-nav-item>
          </div>
          <b-nav-item-dropdown right  v-else >
            <!-- Using 'button-content' slot -->
             <template #button-content>
               <img :src="$auth.user.photo_url" :alt="$auth.user.name" class="rounded-circle d-inline-block" style="width: 35px;">
                 <em class="ml-1">{{ $auth.user.name }}</em>
             </template>

            <b-dropdown-item :to="{name:'settings.profile'}">Profile</b-dropdown-item>
            <b-dropdown-item @click.prevent="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: "app-nav",
  methods:{
    logout(){
      this.$auth.logout()
    }
  }
}
</script>

<style>
.login-text{
  color: #6e6d7a!important;
  font-weight: 500;
}

@media screen and  (max-width: 767px) {
  .login-item{
    display: flex;
    flex-direction: column;
  }
  .login-item >*{
    padding-right: 5px;
  }
}
</style>
