const mutations={
    getParcels(state, items){
        state.parcelsAll=[];
        state.parcelsAll.push(...items);
    },
    getParcelsByStatus(state, items){
        state.parcelsAll=[];
        state.parcelsAll.push(...items);
    }
}
export default mutations