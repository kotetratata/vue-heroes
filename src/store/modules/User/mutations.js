const mutations = {
  setUser(state, user) {
    state.currentUser = user;
  },
  setUniverse(state, universe) {
    state.universe = universe;
  },
};

export default mutations;
