import Vue from "vue";
import Router from 'vue-router'
Vue.use(Router);
const page = path => () => import(`~/pages/${path}`).then(m => m.default || m);
const routes = [
  {
    path:'/',
    name:'index',
    component:page('index.vue')
  },
  {
    path:'/login',
    name:'login',
    component:page('auth/login.vue')
  },
  {
    path:'/register',
    name:'register',
    component:page('auth/register.vue')
  },
  {
    path:'/verification/verify',
    name:'verify',
    component:page('auth/verification/verify.vue')
  },
  {
    path:'/verification/resend',
    name:'verification.resend',
    component:page('auth/verification/resend.vue')
  },
  {
    path:'/password/email',
    name:'password.email',
    component:page('auth/password/password-reset.vue')
  },
  {
    path:'/password/reset/:token',
    name:'password.reset',
    component:page('auth/password/reset-email.vue')
  },
  {
    path:'/user/dashboard',
    name:'dashboard',
    component: page('user/settings/team.vue')
  },
  {
    path: '/upload',
    name: 'designs.upload',
    component: page('user/designs/create.vue')
  },
  {
    path: '/designs/:id/edit',
    name: 'designs.edit',
    component: page('user/designs/edit.vue')
  },
  {
    path: '/settings',
    component: page('user/settings/index.vue'),
    children: [
      {
        path: '',
        redirect: {name: 'settings.profile'},
      },

      {
        path: 'profile',
        name: 'settings.profile',
        component:page('user/settings/profile.vue')
      },
      {
        path: 'designs',
        name: 'settings.designs',
        component:page('user/settings/designs.vue')
      },
    ]
  },
  {
    path: '/designs',
    name: 'designs.search',
    component: page('designs/search.vue')
  },
  {
    path: '/design/:slug',
    name: 'designs.show',
    component: page('designs/show.vue')
  },
  {
    path: '/designers',
    name: 'designers.list',
    component: page('designers/list.vue')
  },
  {
    path: '/designer/:slug',
    name: 'designers.show',
    component: page('designers/show.vue')
  },
  {
    path: '/hiring',
    name: 'designers.hiring',
    component: page('designers/hiring.vue')
  },

];
export const createRouter = () => {
  return new Router({
    routes,
    mode: 'history'
  })
}
