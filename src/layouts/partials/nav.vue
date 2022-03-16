<template>
  <header class="border-bottom shadow-sm">
    <nav class="navbar navbar-expand-lg navbar-light bg-white align-items-center container-fluid">
      <nuxt-link to="/"
        class="navbar-brand text-uppercase fw-500"
        title="Design House"
      >DesignHouse</nuxt-link
      >
      <button
        class="navbar-toggler mr-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav font-14 fw-300">
          <li class="nav-item active">
            <nuxt-link :to="{name:'designs.search'}" class="nav-link" title="Shots">Designs</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="{name:'designers.list'}" class="nav-link" title="Designers"
            > Designers </nuxt-link
            >
          </li>
        </ul>
        <div
          class="upload-shot white-path font-14 fw-500 text-uppercase ml-auto"
        >
          <nuxt-link to="/upload" class="btn-info btn rounded shadow-sm text-white">
            <i class="fas fa-cloud-upload-alt"></i> Upload
          </nuxt-link>
        </div>
      </div>

      <!-- Before Login -->
      <ul class="font-14 fw-300 text-uppercase d-flex align-items-center mb-0" v-if="!$auth.loggedIn">
        <li>
          <nuxt-link :to="{name:'register'}" class="nav-link text-dark font-14 login-text">Sign up</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name:'login'}" class="nav-link text-dark font-14 login-text">Sign in</nuxt-link>
        </li>
      </ul>
      <!-- End Before Login -->

      <!-- After Login -->
      <ul class="author-page white-path" v-else>
        <!-- Profile Dropdown -->
        <li class="dropdown">
          <a
            href="#"
            class="dropdown-toggle text-white"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              class="user-thumb"
              :src="$auth.user.photo_url"
              alt="Neba Funwi-Gabga"
            />
            <div class="usr-info d-flex flex-column">
              <span class="user-name font-14 fw-500 text-dark">
                                  {{ $auth.user.username }}
              </span>
              <span class="down-chevron text-dark">
                <i class="fa fa-angle-down"></i>
                                </span>
            </div>
          </a>
          <div
            class="dropdown-menu user-dropdown font-14 fw-500"
            aria-labelledby="userDropdown"
          >
            <div class="dropdown-title-group font-12 fw-500">
                                <span class="dropdown-title text-uppercase"
                                >Your Account</span
                                >
            </div>
            <nuxt-link to="/settings/dashboard"
              class="dropdown-item mt-28"
              title="dashboard"
            >
              <i class="fa fa-cogs"></i>
              Dashboard
            </nuxt-link>
            <nuxt-link to="/settings/profile"
              class="dropdown-item mt-28"
              title="Profile"
            >
              <i class="fa fa-user"></i>
              Profile
            </nuxt-link>
            <a class="dropdown-item" href="#" title="Setting">
              <i class="fa fa-cogs"></i>
              Setting
            </a>
            <div class="dropdown-divider"></div>
            <button class="dropdown-item" title="Sign Out" @click="logout">
              <i class="fa fa-lock"></i>
              Sign Out
            </button>
          </div>
        </li>
        <!-- End Profile Dropdown -->
      </ul>
      <!-- End After Login -->
    </nav>
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

<style scoped>
.dropdown-menu{
  left: -100px!important;
  margin-top: 15px;
}
.login-text{
  color: #6e6d7a!important;
  font-weight: 500;
}
</style>
