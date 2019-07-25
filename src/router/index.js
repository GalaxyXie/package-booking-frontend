import Vue from 'vue'
import Main from '../components/Main'
import AddParcel from '../components/AddParcel'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/', component: Main,
  },
 
  { path: '/parcels', name: 'AddParcel', component: AddParcel},
],
  router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
export default router