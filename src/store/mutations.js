const mutations={
    getParcels(state, items){
        state.parcelsAll.push(...items);
    },
}
export default mutations