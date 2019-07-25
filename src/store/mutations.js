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
    }
}
export default mutations