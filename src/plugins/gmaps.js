import Vue from "vue";
import * as VueGoogleMaps from 'vue2-google-maps-withscopedautocomp'

Vue.use(VueGoogleMaps,{
  load:{
    key:'AIzaSyB3OYwxEImukP_3QvtyXtm3pjxAX4JhscE',
    libraries:'places'
  }
})
