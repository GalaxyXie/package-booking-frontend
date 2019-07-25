import Vue from 'vue'
import Main from '../view/Main'
import AddParcel from '../view/AddParcel'
import updateTime from '../view/updateTime'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/', component: Main,
  },
 
  { path: '/parcels', name: 'AddParcel', component: AddParcel},
  { path: '/update-parcels', name: 'updateTime', component:  updateTime},
],
  router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
export default router