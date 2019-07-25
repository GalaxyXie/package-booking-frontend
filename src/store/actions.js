import axios from 'axios'
import Vue from "vue"
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
const actions = {
    // Make a request for a user with a given ID

    getItem({ commit }) {
        axios.get('http://localhost:8888/parcels')
            .then(function (response) {

                console.log(response.data);
                console.log(response.status);
                commit('getParcels', response.data);
            });
    },
    getItemByStatus({ commit }, status) {

        axios.get('http://localhost:8888/parcels', { 
            params: {
                status: status
            }
        })
            .then(function (response) {
                console.log(response.data);
                console.log(response.status);
                commit('getParcelsByStatus', response.data);
            });
    },
    addItem({commit},item){
        axios.post('http://localhost:8888/parcels', item)
        .then(function (response) {
          commit('addItem',item);
          console.log(item);
        })
        .catch(function (error) {
          console.log(error);
        });  
      },
      updateItem({commit},item){
        axios.put('http://localhost:8888/parcels/' +item.orderId,item)
        .then(function (response) {
          commit('updateItem',item);
          console.log(item);
        })
        .catch(function (error) {
          console.log(error);
        });  
      },
}
export default actions