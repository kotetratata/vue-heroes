const getters = {
  getName(state) {
    return state.name;
  },
  getCurrentLoads(state) {
    return (id) => state.loads[id];
  },
  getAllLoads(state) {
    return state.loads;
  },
};

export default getters;
