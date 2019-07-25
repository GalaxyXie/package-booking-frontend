const mutations={
    getParcels(state, items){
        state.parcelsAll=[];
        state.parcelsAll.push(...items);
    },
    getParcelsByStatus(state, items){
        state.parcelsAll=[];
        state.parcelsAll.push(...items);
    },
    addItem(state,item){
        state.parcelsAll.push(item);
    },
    updateItem(state, item){
        state.parcelsAll.map(itemNow=>itemNow.orderId==item.orderId?item:itemNow);
    },
    filterItem(state, id){
        state.parcelsAll.filter(item=>item.orderId==id);
    },
}
export default mutations