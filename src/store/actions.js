import axios from 'axios'
import Vue from "vue"
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
const actions={
// Make a request for a user with a given ID

getItem({commit}){
    axios.get('http://localhost:8888/parcels')
     .then(function(response) { 
         
    console.log(response.data);
    console.log(response.status);
    commit('getParcels',response.data);
  });
  },

}
export default actions