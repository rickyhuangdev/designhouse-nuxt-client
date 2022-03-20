<template>
 <div class="dashboard_page mb-5">
   <div class="user-account-setting">
     <div class="container p-3">
       <div class="row">
         <div class="col d-flex align-items-center justify-content-center text-center">
           <img :src="$auth.user.photo_url" :alt="$auth.user.name" class="rounded-circle" style="width: 90px;height: 90px;">
           <div class="user-info ml-2">
             <h1 class="auth-username d-block mb-2">{{$auth.user.name}}</h1>
             <span class="auth-address text-muted m-1">{{$auth.user.formatted_address}}</span>
           </div>
         </div>
       </div>
       <div class="row">
         <!-- LEFT -->
         <div class="col">
           <div class="d-flex profile_links_list">
             <ul class="d-flex p-3">
               <li v-for="link in links" :key="link.route">
                 <NuxtLink :to="{name:link.route}" class="mr-3 user_link">{{ link.title }}</NuxtLink>
               </li>
             </ul>
           </div>
         </div>
         <!-- END RIGHT -->
       </div>
     </div>
   </div>
   <div class="main-content">
      <div class="container">
        <router-view></router-view>
      </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "indexPage",
  middleware:['auth'],
  data() {
    return {
      links: [
        {
          title: 'Dashboard',
          route: 'settings.dashboard'
        },
        {
          title: 'Profile',
          route: 'settings.profile'
        },
        {
          title: 'Designs',
          route: 'settings.designs'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.auth-username{
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  margin-top: 5px;
}
.auth-address{
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 8px;
}
a.router-link-active {
  font-weight: bold;
}

/* exact link will show the primary color for only the exact matching link */
a.router-link-exact-active {
  color: #0d0c22!important;
}

a,
a:visited {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: #0d0c22;
}

.profile_links_list {
  border-bottom: #98B4D4 solid 2px;
  white-space: nowrap;
  scroll-behavior: smooth;

  & > ul > li {
    &>a{
      color: #6e6d7a;
      font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
    }
    &> a:nth-last-child(1) {
      padding-right: 10px;
    }
  }
}

</style>
