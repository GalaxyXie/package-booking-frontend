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

        axios.get('http://localhost:8888/parcels', {  //params参数必写 , 如果没有参数传{}也可以
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
}
export default actions